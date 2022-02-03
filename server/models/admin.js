const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
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
);

adminSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

adminSchema.pre("save", function () {
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
