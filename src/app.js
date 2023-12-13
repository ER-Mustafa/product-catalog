const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    app.listen(3000);
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });
