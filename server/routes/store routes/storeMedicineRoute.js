const express = require("express");
const router = express.Router();
const Medicine = require("../../models/medicine");
const {
  create,
  update,
  updateQuantity,
  deleteOne
} = require("../../controllers/store controllers/storeMedController");

router.post("/medicine/add", async (req, res, next) => {
  const body = req.body;
  body.categories = body.categories.split(" ");
  const medArr = await Medicine.find({});
  body.id = medArr.length + 1;
  create(body)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.patch("/medicine/:id", (req, res, next) => {
  const medId = req.params.id;
  const medicine = req.body;

  update(medId, medicine)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.delete("/medicine/:id", (req, res, next) => {
  const medId = req.params.id;
  const medicine = req.body;

  deleteOne(medId, medicine)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.patch("/medicine/quantity/:id", (req, res, next) => {
  const medId = req.params.id;
  const medicineQuantity = req.body.quantity;
  updateQuantity(medId, medicineQuantity)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

module.exports = router;
