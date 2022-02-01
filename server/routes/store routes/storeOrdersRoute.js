const express = require("express");
const router = express.Router();
const Orders = require("../../models/order");
const {
    getOrderById,
    getAllOrders
} = require("./../../controllers/store controllers/storeOrdersController")


router.get("/orders/all", (req, res, next) => {
        getAllOrders()
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});

router.get("/orders/orderDetails/:id", (req, res, next) => {
    const orderID = req.params.id;
    getOrderById(orderID)
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});

module.exports = router;