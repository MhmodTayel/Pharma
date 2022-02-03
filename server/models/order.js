const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 1,
        required: true
    },
    number: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    numberOfCat: Number,
    quantityOfCat: Number,
    inProgress: Boolean,
    fulfilled: Boolean,
    discount: Boolean,
    medicines: [
        {
            name: String,
            quantity: Number
        },
    ],
},


)
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;