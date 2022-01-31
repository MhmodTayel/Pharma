const Medicine = require("../../models/medicine");

const create = (medicine) => Medicine.create(medicine);
const update = (id, medicine) => Medicine.updateOne({ id }, medicine);
const updateQuantity = (id, quantity) =>
  Medicine.updateOne({ id }, { $inc: { quantity } });
module.exports = { create, update, updateQuantity };
