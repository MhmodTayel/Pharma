require("dotenv").config();
const Pharmacist = require("../../models/pharmacist");
const jwt = require("jsonwebtoken");
const Message = require("../../models/message");
const Notification=require("../../models/notification");
const { set } = require("mongoose");

const create = (user) => {
  console.log(user)
  return Pharmacist.create(user)
};

const createMessage = (message) => Message.create(message);
const createNotification = (notification) => Notification.create(notification);
const findNotification = () => Notification.find({});
const deleteOne = (id) => Notification.deleteOne({ id: id });
const updateone = (id,body) => Notification.updateOne({id},{...body});

const login = async ({ username, password }, next) => {
  const user = await Pharmacist.findOne({ username });
  console.log( user , 'user con')
  console.log(username)
  if (!user) {
    next(`wrong username`);
    return;
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    next(`wrong password`);
    return;
  }

  return jwt.sign(
    {
      username,
      _id: user._id,
      maxAge: "2d",
    },
    process.env.SECRET
  );
};



module.exports = { create, login ,createMessage ,createNotification ,findNotification,deleteOne,updateone};
