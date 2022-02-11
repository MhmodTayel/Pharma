const express = require("express");
const router = express.Router();
const {create,login,update} = require('../../controllers/store controllers/adminController')


router.post("/admin/register", (req, res, next) => {
  const user = req.body;
  create(user)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});


router.post("/admin/login", async (req,res, next) => {
  const { username, password } = req.body;
  const token = await login({ username, password },next);
  res.json(token);
});


router.get("/admin/details", async (req,res, next) => {
    res.json(req.admin);
  });
  
router.patch("/admin/edit-details", async (req,res, next) => {
update(req.admin._id, req.body)
.then((doc) => res.json(doc))
.catch((e) => next(e));
});


module.exports = router;


