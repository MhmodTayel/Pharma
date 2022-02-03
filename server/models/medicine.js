const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    id:{
        type: Number,
        default: 1,
        required: true
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
    pharmPrice:{
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
    },
    concentration:{
        type: String,
              
    },
    arriveDate:{
        type: Date,
        required: true
        
    },
    categories: {
        type: [
          {
            type: String,
            minLength: 3,
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
        default: 100,
        required: true
        
    },
}, {timestamps: true});

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = Medicine;

