const mongoose = require('mongoose');
const savedOrderSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 1,
        required: true
    },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Pharmacist' },
  
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
const SavedOrder = mongoose.model("SavedOrder", savedOrderSchema);
module.exports = SavedOrder;