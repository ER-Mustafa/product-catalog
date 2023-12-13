const Product = require("../models/product");
const Category = require("../models/category");
const categoryService = require("../services/category-service");

const createProduct = async (req) => {
  const { title, description, price, categoryName } = req.body;

  let category = await categoryService.getCategoryByName(categoryName);

  if (!category) {
    try {
      category = await categoryService.createCategory(categoryName);
    } catch (error) {
      throw error;
    }
  }

  const product = new Product({
    title,
    description,
    price,
    categoryId: category._id,
  });

  try {
    await product.save();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProduct,
};
