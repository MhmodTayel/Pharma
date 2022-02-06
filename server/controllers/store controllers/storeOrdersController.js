const Orders = require("../../models/order");

const createOrder = (order) => Orders.create(order);
const getOrderById = (id) => Orders.findOne({ id: id }).populate({ path: 'medicines.id', select: 'name quantity pharmPrice storePrice -_id' })
const getAllOrders = () => Orders.find().populate({ path: 'medicines.id', select: 'name quantity pharmPrice storePrice -_id' });

// get all orders by user id 
const getOrdersByUserId = ( _id ) => Orders.find({ client: _id }).populate("client");

module.exports = { getOrderById, createOrder, getAllOrders , getOrdersByUserId };


