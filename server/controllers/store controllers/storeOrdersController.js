const Orders = require("../../models/order");

const createOrder = (order) => Orders.create(order);
const getOrderById = (id) => Orders.findOne({ id: id }).populate({path:'medicines.id' , select:'name quantity pharmPrice storePrice -_id'})
const getAllOrders = () => Orders.find().populate({path:'medicines.id' , select:'name quantity pharmPrice storePrice -_id'});


module.exports = {getOrderById , createOrder , getAllOrders};


