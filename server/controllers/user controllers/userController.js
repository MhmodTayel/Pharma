require("dotenv").config();
const { Client, Repository } = require("redis-om");
const User = require("../../models/pharmacist");
const jwt = require("jsonwebtoken");
const { Medicine, schema } = require("../../models/medicine");

const create = (user) => User.create(user);
const login = async ({ username, password }, next) => {
  const user = await User.findOne({ username });
  if (!user) {
    next(`wrong username`);
    return;
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    next(`wrong password`);
    return;
  }

  return jwt.sign(
    {
      username,
      _id: user._id,
      maxAge: "2d",
    },
    process.env.SECRET
  );
};

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_CONNECTION_STRING);
  }
}

async function searchMeds(q) {
  await connect();
  console.log("from search controller", q);
  const repo = new Repository(schema, client);
  const meds = await repo
    .search()
    .where("name")
    .match(`${q}*`)
    .or("name")
    .match(q)
    .return.all();
  return meds;
}
module.exports = { create, login, searchMeds };
