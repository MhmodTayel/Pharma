require("dotenv").config();
const Pharmacist = require("../../models/pharmacist");
const jwt = require("jsonwebtoken");

const create = (user) => Pharmacist.create(user);
const login = async ({ username, password }, next) => {
  const user = await Pharmacist.findOne({ username });
  console.log( user , 'user con')
  console.log(username)
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



module.exports = { create, login };
