const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const pharmacistSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 1,
        // required: true
    },
    pharmacyName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    photo: {
        type: String
        // required: true
    },

    pharmacyPhoneNumber: { 
        type: String,
        // required: true,
        maxlength: 12
    },
    pharmacistPhonNumber: {
        type:String,
        required: true,
        minlength:11,
        maxlength: 12
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength:50
    },
    address: {
        type: String,
        required: true,
        maxlength:100
    },

    startingDate: {
        type: Date,
        // required: true,
        // this handeled in backend in post route
    },

    isVIP: {
        type: Boolean,
        default: false
    },

    isDiscount: {
        type: Boolean,
        default: false
    },
    
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        unique:true

    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20
    },

    refundPoints: {
        type: Number,
        default: 0,
    }

},
{
    toJSON: {
      transform: (doc, ret, opts) => {
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
  }
)

pharmacistSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  pharmacistSchema.pre("save", function () {
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
  });
const Pharmacist = mongoose.model("Pharmacist", pharmacistSchema);

module.exports = Pharmacist;