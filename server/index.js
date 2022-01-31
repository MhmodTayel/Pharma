require("dotenv").config();
const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const storeMedRoutes = require('./routes/store routes/storeMedicineRoute');
const storeAdminRoutes = require('./routes/store routes/storeAdminRoute');
const adminAuth = require('./middlewares/store middleware/adminMiddleware')
const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.CONNECTION_STRING);


// app.use(adminAuth);
app.use("/store", storeMedRoutes);
app.use("/store", storeAdminRoutes);
app.use("*", (req, res) => {
  res.status(404).end();
});

app.use((err, req, res, next) => {
  res.status(403).json(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Connection Started on port 3000");
});
