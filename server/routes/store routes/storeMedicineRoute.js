const express = require("express");
const router = express.Router();

const {
  update,
} = require("../../controllers/store controllers/storeMedController");

router.patch("/medicine/:id", (req, res, next) => {
  const medId = req.params.id;
  const medicine = req.body;

  update(medId, medicine)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

module.exports = router;
