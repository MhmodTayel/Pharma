const express = require("express");
const router = express.Router();
const Pharmacist = require("../../models/pharmacist");
const Message = require('../../models/message');
const Notification=require('../../models/notification')

const {
  create,
  login,
  createMessage,
  findNotification,
  createNotification
} = require("../../controllers/user controllers/userController");

router.post("/user/login", async (req, res, next) => {
  const { username, password } = req.body;
  const token = await login({ username, password }, next);
  res.json(token);
});

router.post("/user/register", async (req, res, next) => {
  const user = req.body;
  const id = await Pharmacist.find({}).count();
  user.id = id+1;
  create(user)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.post("/contactUs", async (req, res, next) => {
  const message = req.body;
  const medArr = await Message.find({});
  message.id = medArr.length + 1;
  req.io.emit("message",  req.body.message);
  createMessage(message)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
  
});

router.post("/notification", async (req, res, next) => {
  const notification = req.body;
  const id = await Notification.find({}).count();
  notification.id = id+1;
  createNotification(notification)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
  
});

router.get("/notification/all", (req, res, next) => {
  findNotification()
  .then((doc) => res.json(doc))
  .catch((e) => next(e));
});

module.exports = router;
