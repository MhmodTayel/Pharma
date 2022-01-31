const express = require('express');
const { create } = require('../../controllers/store controllers/storeController');
const router = express.Router();

router.post("/medicine/add", async(req, res, next)=>{
    const body = req.body;
    body.categories = body.categories.split(' ');
    create(body)
    .then((doc)=>res.json(doc))
    .catch((e) => next(e));
})


module.exports = router;