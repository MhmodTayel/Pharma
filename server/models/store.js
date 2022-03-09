const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const storeSchema = new mongoose.Schema({
    id:{
        type: Number,
        default: 1,
        required: true
    },
    username:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25
    },
    password:{
        type: String,
        required: true,
    },

}, {timestamps: true});

storeSchema.pre('save', function () {
    const hash = bcrypt.hashSync('password', 8)
    this.password = hash
})

storeSchema.methods.comparePassword = function (password){
    const isValid = bcrypt.compareSync(password,this.password)
    return isValid
}

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;

