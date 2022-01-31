
const Medicine = require('../../models/medicine');

const create = (medicine)=> Medicine.create(medicine);
const update = (_id, medicine) => Medicine.updateOne({ _id }, medicine);

module.exports = {create,update};

