const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category-controller");

router.post("/create", (req, res, next) => {
  categoryController.createCategory(req, res, next);
});

router.patch("/edit", (req, res, next) => {
  categoryController.editCategory(req, res, next);
});

router.get("/all", (req, res, next) => {
  console.log("this will return all categories");
});

router.delete("/delete-all", (req, res, next) => {
  categoryController.deleteAllCategories(req, res, next);
});

module.exports = router;
