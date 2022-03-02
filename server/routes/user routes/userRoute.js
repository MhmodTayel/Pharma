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
  createNotification,
  deleteOne,
  updateone
} = require("../../controllers/user controllers/userController");

router.post("/user/login", async (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body , 'route')
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
  console.log(message)
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
    console.log(notification)
  
});

router.get("/notification/all", (req, res, next) => {
  findNotification()
  .then((doc) => res.json(doc))
  .catch((e) => next(e));
});

router.delete("/notification/delete/:id", (req, res, next) => {
  const notificationId = req.params.id;
  deleteOne(notificationId)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});


router.patch("/notification/update/:id", (req, res, next) => {
  const notificationId = req.params.id;
  const body = req.body
  updateone(notificationId,body)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});


module.exports = router;
