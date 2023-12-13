const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category-controller");

// requires req.body = { name: String, description: String }
router.post("/create", (req, res, next) => {
  categoryController.createCategory(req, res, next);
});

// requires req.body = { name: String, description: String }
router.patch("/edit", (req, res, next) => {
  categoryController.editCategory(req, res, next);
});

router.delete("/delete-all", (req, res, next) => {
  categoryController.deleteAllCategories(req, res, next);
});

module.exports = router;
