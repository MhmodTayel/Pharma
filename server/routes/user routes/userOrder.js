const express = require("express");
const router = express.Router();
const {
  createStripeCheckoutSession,
  payment,
  createOrder,
  getOrdersById,
  saveOrder,
  deleteSavedOrder,
  getSavedOrders,
} = require("../../controllers/user controllers/userOrderController");
const Order = require("../../models/order");
const SavedOrder = require("../../models/savedOrder");

router.post("/orders/newOrder", async({body}, res, next)=>{
    const id = await Order.find({}).count();
    body.id = id+1;
    createOrder(body)
    .then((doc)=>{
        req.io.emit("newOrder",  doc);     
        res.json(doc)})
    .catch((err)=>next(err))
} );
router.post("/checkouts/", ({ body }, res, next) => {
  console.log(body.line_items[0].images);
  createStripeCheckoutSession(body)
    .then((doc) => res.json(doc))
    .catch((err) => next(err));
});

router.get("/payment/:id", async (req, res, next) => {
  const id = req.params.id;
  const response = await payment(id);
  res.json(response);
});


router.get("/orders/savedOrders", async (req, res, next) => {
    getSavedOrders()
      .then((doc) => res.json(doc))
      .catch((err) => next(err));
  });


router.get("/orders/:id", async (req, res, next) => {
  const id = req.params.id;
  getOrdersById(id)
    .then((doc) => res.json(doc))
    .catch((err) => next(err));
});

router.post("/orders/saveOrder", async ({ body }, res, next) => {
  const id = await SavedOrder.find({}).count();
  body.id = id + 1;
  saveOrder(body)
    .then((doc) => res.json(doc))
    .catch((err) => next(err));
});

router.delete("/orders/savedOrder/:id", async (req, res, next) => {
  deleteSavedOrder(req.params.id)
    .then((doc) => res.json(doc))
    .catch((err) => next(err));
});


module.exports = router;
