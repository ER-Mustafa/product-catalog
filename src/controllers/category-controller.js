const categoryService = require("../services/category-service");

exports.createCategory = async (req, res, next) => {
  try {
    await categoryService.createCategory(req);
    res.status(201).json({
      message: "Category created successfully!",
    });
  } catch (error) {
    res.status(500).json({
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
    const stat = error.message == "Category not found!" ? 400 : 500;
    res.status(stat).json({
      message: "Category edited successfully!",
    });
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
    res.status(500).json({
      message: "Error deleting categories!",
    });
    console.error("Error deleting categories:", error);
  }
};
