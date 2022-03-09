const Orders = require("../../models/order");

const createOrder = (order) => Orders.create(order);
const getOrderById = (id) => Orders.findOne({ id: id })
.populate({path:'client' , select:'pharmacyName pharmacistPhonNumber -_id'});

const getAllOrders = () => Orders.find()
.populate({ path: 'medicines.id', select:'name -_id' })
.populate({path:'client' , select:'pharmacyName pharmacistPhonNumber -_id'});

// get all orders by user id 
const getOrdersByUserId = ( _id ) => Orders.find({ client: _id })
module.exports = { getOrderById, createOrder, getAllOrders , getOrdersByUserId };


