const {Medicine} = require("../../models/medicine");

const findOne = (id) => Medicine.findOne({ id: id })

const updateQuantity = (id,newQuantity) =>
  Medicine.updateOne({ id }, { $inc: { quantity : +('-'+newQuantity)} });

module.exports = {findOne , updateQuantity};
