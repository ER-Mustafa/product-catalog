const Product = require("../models/product");
const categoryService = require("../services/category-service");

const createProduct = async (req) => {
  const { title, description, price, categoryName } = req.body;

  let category = await categoryService.getCategoryByName(categoryName);

  if (!category) {
    try {
      category = await categoryService.createCategory({
        body: { name: categoryName },
      });
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

const editProduct = async (req) => {
  const { title, description, price, categoryName } = req.body;

  let category = await categoryService.getCategoryByName(categoryName);

  if (!category) {
    try {
      category = await categoryService.createCategory({
        body: { name: categoryName },
      });
    } catch (error) {
      throw error;
    }
  }

  try {
    const product = await Product.findOne({ title }).exec();
    if (!product) {
      throw new Error("Product not found!");
    }
    await Product.updateOne(
      { _id: product._id },
      {
        $set: {
          description: description,
          price: price,
          categoryId: category._id,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

const deleteAll = async () => {
  try {
    await Product.deleteMany({});
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProduct,
  deleteAll,
  editProduct,
};
