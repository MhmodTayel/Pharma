const Medicine = require("../../models/medicine");

const update = (_id, medicine) => Medicine.updateOne({ _id }, medicine);

module.exports = { update };
