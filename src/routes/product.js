const express = require("express");
const router = express.Router();

router.post("/create", (req, res, next) => {
  console.log("this will register a product to product catalog");
});

router.get("/all", (req, res, next) => {
  console.log("this will return all products");
});

router.get("/filter", (req, res, next) => {
  console.log("this will filter products");
});

router.patch("/update", (req, res, next) => {
  console.log("this will update a product");
});

router.delete("/delete", (req, res, next) => {
  console.log("this will delete a product");
});

module.exports = router;
