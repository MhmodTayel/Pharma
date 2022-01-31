require("dotenv").config();
const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.CONNECTION_STRING);

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
