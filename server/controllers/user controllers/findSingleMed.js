const {Medicine} = require("../../models/medicine");

const findOne = (id) => Medicine.findOne({ id: id })

const updateQuantity = (id, quantity) =>
  Medicine.updateOne({ id }, { $inc: { quantity } });

module.exports = {findOne , updateQuantity};
