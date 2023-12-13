const express = require("express");
const router = express.Router();

const productController = require("../controllers/product-controller");

// can have req.body = { title: String, categoryName: String }
router.get("/", (req, res, next) => {
  productController.getProducts(req, res, next);
});

// requires req.body = { title: String, description: String, price: Number, categoryName: String }
router.post("/create", (req, res, next) => {
  productController.createProduct(req, res, next);
});

router.get("/all", (req, res, next) => {
  productController.getAllProducts(req, res, next);
});

// req.body must include title since it is unique and used to find the product
// can have req.body = { title: String, description: String, price: Number, categoryName: String }
router.patch("/edit", (req, res, next) => {
  productController.editProduct(req, res, next);
});

// req.body must include title since it is unique and used to find the product
router.delete("/delete", (req, res, next) => {
  productController.deleteProduct(req, res, next);
});

router.delete("/delete-all", (req, res, next) => {
  productController.deleteAllProducts(req, res, next);
});

module.exports = router;
