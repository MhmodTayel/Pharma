const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: 1,
       required: true
    },
    notificationMessage: {
      type: String,
      required:true

    },
    isReaded: {
      type: Boolean,
      required:true

    },
},
  {timestamps: true}

);


const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
