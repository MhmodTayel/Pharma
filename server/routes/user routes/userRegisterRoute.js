const express = require("express");
const router = express.Router();
const {create} = require('../../controllers/user controllers/userController')



router.post("/user/register", (req, res, next) => {
    const user = req.body;
    create(user)
      .then((doc) => res.json(doc))
      .catch((e) => next(e));
  });