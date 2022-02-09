const express = require("express");
const router = express.Router();
const {update} = require("../../controllers/store controllers/adminController");

router.get("/admin/details", async (req,res, next) => {
    res.json(req.admin);
  });
  
router.patch("/admin/edit-details", async (req,res, next) => {
update(req.admin._id, req.body)
.then((doc) => res.json(doc))
.catch((e) => next(e));
});

module.exports = router;  
