const express = require("express");
const router = express.Router();

const productController = require("../controllers/product-controller");

// req should be { title, description, price, categoryName }
router.post("/create", (req, res, next) => {
  productController.createProduct(req, res, next);
});

router.get("/all", (req, res, next) => {
  productController.getAllProducts(req, res, next);
});

router.get("/filter", (req, res, next) => {
  console.log("this will filter products");
});

router.patch("/edit", (req, res, next) => {
  productController.editProduct(req, res, next);
});

router.delete("/delete", (req, res, next) => {
  console.log("this will delete a product");
});

router.delete("/delete-all", (req, res, next) => {
  productController.deleteAllProducts(req, res, next);
});

module.exports = router;
