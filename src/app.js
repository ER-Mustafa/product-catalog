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
  if (process.env.NODE_ENV !== "test") {
    app.listen(process.env.PORT || 3000);
  }
  console.info("Connected to database!");
} catch (error) {
  console.error("Connection failed!", error);
}

module.exports = app;
