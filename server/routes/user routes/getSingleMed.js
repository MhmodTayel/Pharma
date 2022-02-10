const express = require("express");
const router = express.Router();
const { findOne, updateQuantity } = require('../../controllers/user controllers/findSingleMed')


router.get("/medicine/:id", (req, res, next) => {
    const id = req.params.id
    findOne(id)
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});

router.patch("/medicine/quantity/:id", (req, res, next) => {
    const id = req.params.id;
    const quantity = req.body.quantity;
    updateQuantity(id, quantity)
      .then((doc) => res.json(doc))
      .catch((e) => next(e));
  });

module.exports = router;