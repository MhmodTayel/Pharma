const Orders = require("../../models/order");

const getOrderById = (id) => Orders.findOne({ id: id })
const getAllOrders = () => Orders.find();


module.exports = {getOrderById};


