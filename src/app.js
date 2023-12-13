const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    app.listen(3000);
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });
