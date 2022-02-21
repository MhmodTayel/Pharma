const { Medicine, schema } = require("../../models/medicine");
const { Client, Repository } = require("redis-om");

const findOne = (id) => Medicine.findOne({ id: id });
const findAll = () => Medicine.find();

const getMedicinesByCat = ( cat ) => Medicine.find({ categories: { "$in" : [cat]} } )


const updateQuantity = (id, newQuantity) =>
  Medicine.updateOne({ id }, { $inc: { quantity: +("-" + newQuantity) } });


//------------ Search ------------//
const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_CONNECTION_STRING);
  }
}
async function searchMeds(q) {
  await connect();
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

module.exports = { findOne, updateQuantity,searchMeds,findAll,getMedicinesByCat };

