const express = require("express");
const router = express.Router();

const {
  findOne,
  updateQuantity,
  searchMeds,
  getMedicinesByCat,
  findAll,
} = require("../../controllers/user controllers/userMedController");

router.get("/medicine/search", (req, res, next) => {
  searchMeds(req.query.query)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});


router.get("/medicine/category/:cat", (req, res, next) => {
  const cat = req.params.cat;
  getMedicinesByCat(cat)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.get("/medicine/all", (req, res, next) => {
  findAll()
  .then((doc) => res.json(doc))
  .catch((e) => next(e));
})



router.get("/medicine/:id", (req, res, next) => {
  const id = req.params.id;
  findOne(id)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.patch("/medicine/quantity", (req, res, next) => {
  const id = req.body.id;
  const newQuantity = req.body.quantity;
  updateQuantity(id, newQuantity)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

module.exports = router;
