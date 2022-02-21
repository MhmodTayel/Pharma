const express = require("express");
const router = express.Router();
const Pharmacist = require("../../models/pharmacist");
const Message = require('../../models/message')

const {
  create,
  login,
  createMessage
} = require("../../controllers/user controllers/userController");

router.post("/user/login", async (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body , 'route')
  const token = await login({ username, password }, next);
  res.json(token);
});

router.post("/user/register", async (req, res, next) => {
  const user = req.body;
  console.log(user)
  const id = await Pharmacist.find({}).count();
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
});

module.exports = router;
