const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 0,
        required: true
    },
    number: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    numberofcat: Number,
    quantityofcat:Number,
    inprogress : Boolean,
    fulfilled : Boolean,
    discount : Boolean,
    medicines:{
        type: String,
        required: true,
    },


})
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;