const Orders = require("../../models/order");

const createOrder = (order) => Orders.create(order);
const getOrderById = (id) => Orders.findOne({ id: id })
const getAllOrders = () => Orders.find();


module.exports = {getOrderById , createOrder , getAllOrders};


