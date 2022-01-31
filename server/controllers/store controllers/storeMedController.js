const Medicine = require('../../models/medicine');

const create = (medicine)=> Medicine.create(medicine);


module.exports = {create};