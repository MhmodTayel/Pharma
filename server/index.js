const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());

app.use(express.json());



app.use("*", (req, res) => {
  res.status(404).end();
});

app.use((err, req, res, next) => {
  res.status(403).json( err);
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log("Connection Started on port 8080");
});