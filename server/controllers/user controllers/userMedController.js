const { Medicine, schema } = require("../../models/medicine");
const { Client, Repository } = require("redis-om");

const findOne = (id) => Medicine.findOne({ id: id });
const findAll = () => Medicine.find();

const getMedicinesByCat = ( cat ) => Orders.find({ categories: { "$in" : [cat]} } )
const getIncomingMed = (date) => Medicine.find({arriveDate: {$gte:date}})
const getIncomingMedNumber = (date)=> Medicine.countDocuments({arriveDate: {$gte:date}})



const updateQuantity = (id, newQuantity) =>
  Medicine.findOneAndUpdate({ id }, { $inc: { quantity: +("-" + newQuantity) } }, {returnDocument: 'after'});

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

module.exports = { findOne, updateQuantity,searchMeds,findAll,getMedicinesByCat ,getIncomingMed,getIncomingMedNumber};

