const express = require("express");
const router = express.Router();
const Message = require('../../models/message')
const User = require("../../models/pharmacist");
const {
  create,
  login,
  createMessage
} = require("../../controllers/user controllers/userController");

router.post("/user/login", async (req, res, next) => {
  const { username, password } = req.body;
  const token = await login({ username, password }, next);
  res.json(token);
});

router.post("/user/register", async (req, res, next) => {
  const user = req.body;
  const id = await User.find({}).count();
  user.id = id;
  create(user)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.post("/contactUs", async (req, res, next) => {
  const message = req.body;
  const medArr = await Message.find({});
  message.id = medArr.length + 1;
  console.log(message)
  createMessage(message)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
    // req.io.emit("message",  req.body.message);
});

module.exports = router;
