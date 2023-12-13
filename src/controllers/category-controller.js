const categoryService = require("../services/category-service");

exports.createCategory = async (req, res, next) => {
  try {
    await categoryService.createCategory(req);
    res.status(201).json({
      message: "Category created successfully!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Category creation failed!",
    });
    console.error("Error creating category:", error);
  }
};

exports.editCategory = async (req, res, next) => {
  try {
    await categoryService.editCategory(req);
    res.status(200).json({
      message: "Category edited successfully!",
    });
  } catch (error) {
    console.error("Error editing category:", error);
  }
};

exports.deleteAllCategories = async (req, res, next) => {
  try {
    await categoryService.deleteAll();
    res.status(200).json({
      message: "All categories deleted successfully!",
    });
  } catch (error) {
    console.error("Error deleting categories:", error);
  }
};
