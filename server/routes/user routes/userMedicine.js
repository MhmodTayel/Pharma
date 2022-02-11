const express = require("express");
const router = express.Router();
const {searchMeds} = require('../../controllers/user controllers/userController')

router.get('/medicine/search',(req,res,next)=> {
  searchMeds(req.query.query)
  .then((doc) => res.json(doc))
  .catch((e) => next(e));
})

module.exports = router;