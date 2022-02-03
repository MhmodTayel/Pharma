const express = require("express");
const router = express.Router();
const Medicine = require("../../models/medicine");
const {
  create,
  update,
  updateQuantity,
  deleteOne,
  getById
} = require("../../controllers/store controllers/storeMedController");

const uploadS3 = require("../../middlewares/imageMiddleware");

router.post(
  "/medicine/add",
  uploadS3.single("image"),
  async (req, res, next) => {
    const body = req.body;
    body.image = req.file?.location;
    // body.categories = body.categories.split(" ");
    const medArr = await Medicine.find({});
    body.id = medArr.length + 1;
    console.log(body)
    create(body)
      .then((doc) => res.json(doc))
      .catch((e) => next(e));
  }
);

router.patch("/medicine/:id", uploadS3.single("image"), (req, res, next) => {
  const medId = req.params.id;
  const medicine = req.body;
  medicine.image = req.file?.location;
  update(medId, medicine)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.delete("/medicine/delete/:id", (req, res, next) => {
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

router.get("/medicine/details/:id", (req, res, next) => {
  const medId = req.params.id;
  console.log(medId);
  getById(medId)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

module.exports = router;
