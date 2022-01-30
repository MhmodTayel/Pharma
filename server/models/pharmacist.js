const mongoose = require('mongoose');

const pharmacistSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 0,
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    photo: {
        type: String,
        required: true

    },
    pharmacyPhoneNumber: {
        type: Number,
        required: true
    },
    pharmacistPhonNumber: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        // we can delete required because maybe not all pharmasis have email 
        required: true,
        unique: true,

    },
    address: {
        type: String,
        required: true,
    },
    startingDate: {
        type: Date,
        required: true,
    },
    isVIP: {
        type: Boolean,
        required: true
    },

    // i replace offer with disscount 
    //  هنخليها ترو او فولس والمخرن يبقي يحط له الخصم
    isDiscount: {
        type: Boolean,
        required: true
    },
    userName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
        unique:true

    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    refundPoints: {
        type: Number,
        default: 0,
        required:true
    }

})
const Pharmacist = mongoose.model("Pharmacist", pharmacistSchema);

module.exports = Pharmacist;