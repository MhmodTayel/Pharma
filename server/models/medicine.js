const mongoose = require('mongoose');
const { Client, Entity, Schema, Repository } = require("redis-om");
const medicineSchema = new mongoose.Schema({
    id:{
        type: Number,
        default: 1,
        required: true
    },
    name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    description:{
        type: String,

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
        minlength: 3,
        maxlength: 20

    },
    image:{
        type: String,
      
        
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

//Redis Schema
class Med extends Entity {}

let schema = new Schema(
  Med,
  {
    id: { type: "number" },
    name: { type: "string", textSearch: true },
  },
  {
    dataStructure: "JSON",
  }
);

module.exports = {Medicine, schema};

