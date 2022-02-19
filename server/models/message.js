const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: 1,
       required: true
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    message: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
    },
  },
  {timestamps: true}

);


const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
