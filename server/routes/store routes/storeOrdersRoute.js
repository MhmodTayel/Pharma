const express = require("express");
const router = express.Router();
const Orders = require("../../models/order");
const {
    getOrderById,
    getAllOrders,
    getOrdersByUserId,
    createOrder,
} = require("./../../controllers/store controllers/storeOrdersController")

router.post("/orders/add", (req, res, next) => {
    const order = req.body;
    createOrder(order)
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});

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
// get all user orders by user id 
router.get("/orders/user/:id", (req, res, next) => {
    const id = req.params.id
    getOrdersByUserId(id)
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});


module.exports = router;