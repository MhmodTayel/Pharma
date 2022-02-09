require("dotenv").config();
const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const storeMedRoutes = require("./routes/store routes/storeMedicineRoute");
const storeAdminRoutes = require("./routes/store routes/storeAdminRoute");
const storeOrdersRoutes = require('./routes/store routes/storeOrdersRoute')
const adminSettings = require("./routes/store routes/adminSettingsRoute")
const adminAuth = require("./middlewares/store middleware/adminMiddleware");
const userRegisterRoute = require("./routes/user routes/userRegisterRoute")
const  userAuth= require("./middlewares/user middleware/userMiddleware")
const userLoginRoute = require("./routes/user routes/userLoginRoute");


const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.CONNECTION_STRING);
app.use("/store", storeAdminRoutes);
app.use(adminAuth);
app.use("/store", adminSettings);
app.use("/store", storeMedRoutes);

// app.use("/pharma", userRegisterRoute);
// app.use(userAuth)
// app.use("/pharma", userLoginRoute);


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
