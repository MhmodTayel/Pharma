const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic')
const medicineSchema = new mongoose.Schema({
    id:{
        type: Number,
        default: 1,
        required: true,
        es_indexed: true
    },
    name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        es_indexed: true,
        
        
        es_type: 'search_as_you_type',
        // es_index_analyzer: 'simple',
        // es_search_analyzer: 'simple',
        // es_payloads: true
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
        // required: true
        
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

medicineSchema.plugin(mongoosastic);
const Medicine = mongoose.model("Medicine", medicineSchema);
// Medicine.createMapping({
//     properties: {
//       name: {
//         type: "search_as_you_type",
//       },
//     },
//   });

Medicine.createMapping({
    "mappings" : {
        "properties": {
            "name": {
              "type": "search_as_you_type"
            }
      }}
},function(err, mapping) {
    if (err) {
        console.log('error creating mapping (you can safely ignore this)');
        console.log(err);
    } else {
        console.log('mapping created!');
        console.log(mapping);
    }
});
module.exports = Medicine;

