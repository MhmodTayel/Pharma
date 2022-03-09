const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 1,
        required: true
    },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Pharmacist' },

    receipt_url:{
        type:String
    },
    billing_detail: {
        type:Object
    },
    created:{
        type:Number
    },
  
    cost: Number,
    numberOfCat: Number,
    inProgress: Boolean,
    fulfilled: Boolean,
    discount: Boolean,
    medicines: [
        {
           type:Object
        },
    ]
    
},{timestamps: true}
)
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;