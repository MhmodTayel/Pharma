const express = require("express");
const router = express.Router();

const { findOne,
      updateQuantity,
      searchMeds,
      getMedicinesByCat,
      findAll,
      getIncomingMed,
      getIncomingMedNumber } = require('../../controllers/user controllers/userMedController')


router.get('/medicine/search',(req,res,next)=> {
  searchMeds(req.query.query)
  .then((doc) => res.json(doc))
  .catch((e) => next(e));
});

router.get('/medicine/category/:cat',(req,res,next)=> {
  const cat = req.params.cat
  getMedicinesByCat(cat)
})
router.get('/medicine/all',(req,res,next)=> {
  findAll()
  .then((doc) => res.json(doc))
  .catch((e) => next(e));
});

router.post('/medicine/incoming', (req,res,err)=>{
  let date = new Date(req.body.date)
  console.log(req.body.date)
  getIncomingMed(date)
  .then((doc) => res.json(doc))
  .catch((e) => res.json(e))
})

let weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
router.get('/medicine/incomingMedsNumber', (req,res,err)=>{
  getIncomingMedNumber(weekAgo)
  .then((count) => res.json(count))
  .catch((e) => res.json(e))
})

router.get("/medicine/:id", (req, res, next) => {
  const id = req.params.id
  findOne(id)
      .then((doc) => res.json(doc))
      .catch((e) => next(e));
});

router.patch("/medicine/quantity/:id", (req, res, next) => {
  const id = req.params.id;
  const newQuantity = req.body.quantity;
  updateQuantity(id, newQuantity)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

module.exports = router;