const Medicine = require("../../models/medicine");

const create = (medicine) => Medicine.create(medicine);
const update = (id, medicine) => Medicine.updateOne({ id }, medicine);
const deleteOne = (id) => Medicine.deleteOne({ id: id });
const getById = (id) => Medicine.findOne({ id: id })
const updateQuantity = (id, quantity) =>
  Medicine.updateOne({ id }, { $inc: { quantity } });

module.exports = { create, update, updateQuantity, getById, deleteOne };

