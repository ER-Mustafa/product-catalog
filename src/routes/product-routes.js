const express = require("express");
const router = express.Router();

const productController = require("../controllers/product-controller");

router.get("/", (req, res, next) => {
  productController.getProducts(req, res, next);
});

router.post("/create", (req, res, next) => {
  productController.createProduct(req, res, next);
});

router.get("/all", (req, res, next) => {
  productController.getAllProducts(req, res, next);
});

router.patch("/edit", (req, res, next) => {
  productController.editProduct(req, res, next);
});

router.delete("/delete", (req, res, next) => {
  productController.deleteProduct(req, res, next);
});

router.delete("/delete-all", (req, res, next) => {
  productController.deleteAllProducts(req, res, next);
});

module.exports = router;
