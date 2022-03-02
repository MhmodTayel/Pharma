const { Medicine, schema } = require("../../models/medicine");
const { Client, Repository } = require("redis-om");
const getAll = () => Medicine.find({});
const create = (medicine) => Medicine.create(medicine);
const update = (id, medicine) =>
  Medicine.findOneAndUpdate({ id }, medicine, { returnDocument: "after" });
const deleteOne = (id) => Medicine.deleteOne({ id: id });
const getById = (id) => Medicine.findOne({ id: id });
const updateQuantity = (id, quantity) =>
  Medicine.updateOne({ id }, { $inc: { quantity } });

//Redis Search

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_CONNECTION_STRING);
  }
}
async function createMedRedis(data) {
  await connect();
  const repo = new Repository(schema, client);
  const med = repo.createEntity(data);
  const id = await repo.save(med);
  return id;
}

async function createIndex() {
  await connect();
  const repo = new Repository(schema, client);
  await repo.createIndex();
}

async function searchMeds(q) {
  await connect();
  const repo = new Repository(schema, client);
  const meds = await repo.search().where("name").matches(q).return.all();

  return meds;
}

var start = new Date();
start.setHours(0, 0, 0, 0);
var end = new Date();
end.setHours(23, 59, 59, 999);
const getIncomingToday = () =>
  Medicine.find({ createdAt: { $gte: start, $lte: end } });

var weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
const getIncomingLastWeek = () =>
  Medicine.find({ createdAt: { $gte: weekAgo } });

module.exports = {
  create,
  update,
  updateQuantity,
  getById,
  deleteOne,
  getAll,
  createMedRedis,
  createIndex,
  searchMeds,
  getIncomingToday,
  getIncomingLastWeek,
};
