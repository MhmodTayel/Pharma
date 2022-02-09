const express = require("express");
const router = express.Router();
const {login} = require ("../../controllers/user controllers/userController")

router.post("/login", async (req,res, next) => {
    const { username, password } = req.body;
    const token = await login({ username, password },next);
    res.json(token);
  });