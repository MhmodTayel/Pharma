const express = require("express");
const router = express.Router();
const {createStripeCheckoutSession} = require('../../controllers/user controllers/userOrderController')

router.post("/checkouts/", ({body}, res, next)=>{
    
    createStripeCheckoutSession(body.line_items)
    .then((doc)=> res.json(doc))
    .catch((err)=>next(err))
} );


module.exports = router
