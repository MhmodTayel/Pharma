const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:{
        type: Number,
        default: 0,

    },
    name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    description:{
        type: String,
        required: true,
        minLength: 5,
        maxlength: 300

    },
    quantity:{
        type: Number,
        required: true
    },
    sellingPrice:{
        type: Number,
        required: true
    },
    storePrice:{
        type: Number,
        required: true
    },
    expDate:{
        type: Date,
        required: true
    },
    companyProvider:{
        type: String,
        required: true,

    },
    image:{
        type: String,
        required: true
        
    },
    isAvailable:{
        type: Boolean,
        required: true
        
    },
    type:{
        type: String,
        required: true
        
    },
    size:{
        type: String,
        required: true
        
    },
    concentration:{
        type: String,
        required: true
        
    },
    date:{
        type: Date,
        required: true
        
    },
    categories: {
        type: [
          {
            type: String,
            minLength: 5,
            maxlength: 20,
          },
        ],
    },
    discount:{
        type: Number,
        required: true
        
    },
    firmPrice:{
        type: String,
        required: true
        
    },
    brand:{
        type: String,
        required: true
        
    },
    limit:{
        type: Number,
        required: true
        
    },
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

