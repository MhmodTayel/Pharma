require("dotenv").config();
const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const authMiddleware = require("./middlewares/routerMiddleware");
const { userMedicine, userOrder, userRoute } = require("./routes/user routes");
const {
  storeAdminRoute,
  storeMedRoute,
  storeOrderRoute,
} = require("./routes/store routes");
const app = express();

var server = require("http").createServer(app);
var io = require("socket.io")(server, { cors: { origin: "*" } });

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.CONNECTION_STRING);

app.use(authMiddleware)
app.use("/users", [userRoute, userMedicine, userOrder]);
app.use("/store", [storeAdminRoute, storeMedRoute, storeOrderRoute]);

app.use("*", (req, res) => {
  res.status(404).end();
});

app.use((err, req, res, next) => {
  res.status(403).json(err);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Connection Started on port ${PORT}`);
});
