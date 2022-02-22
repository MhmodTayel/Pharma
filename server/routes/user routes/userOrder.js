const express = require("express");
const router = express.Router();
const {createStripeCheckoutSession, payment, createOrder} = require('../../controllers/user controllers/userOrderController');
const Order = require("../../models/order");

router.post("/checkouts/", ({body}, res, next)=>{
    console.log(body.line_items[0].images)
    createStripeCheckoutSession(body)
    .then((doc)=> res.json(doc))
    .catch((err)=>next(err))
} );

router.get("/payment/:id",async (req, res, next)=>{
    const id = req.params.id
   const response = await payment(id)
  res.json(response)
} );

router.post("/orders/newOrder", async({body}, res, next)=>{
    const id = await Order.find({}).count();
    body.id = id+1;
    createOrder(body)
    .then((doc)=> res.json(doc))
    .catch((err)=>next(err))
} );

module.exports = router
