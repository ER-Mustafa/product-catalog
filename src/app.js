const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product-routes");
const categoryRoutes = require("./routes/category-routes");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);

try {
  mongoose.connect(process.env.MONGODB_URI);
  console.info("Connected to database!");
} catch (error) {
  console.error("Connection failed!", error);
}
