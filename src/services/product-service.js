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

  let category;
  if (categoryName) {
    category = await categoryService.getCategoryByName(categoryName);

    if (!category) {
      try {
        category = await categoryService.createCategory({
          body: { name: categoryName },
        });
      } catch (error) {
        throw error;
      }
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
          description: description ? description : product.description,
          price: price ? price : product.price,
          categoryId: categoryName ? category._id : product.categoryId,
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

const getAllProducts = async () => {
  try {
    const products = await Product.find({}).exec();
    return products;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (req) => {
  try {
    await Product.deleteOne({ title: req.body.title });
  } catch (error) {
    throw error;
  }
};

const getProducts = async (req) => {
  const { title, categoryName } = req.body;
  try {
    let category;

    if (categoryName) {
      category = await categoryService.getCategoryByName(categoryName);

      if (!category) {
        throw new Error("Category not found!");
      }

      return Product.find({
        title: title ? title : { $regex: ".*" },
        categoryId: category._id,
      });
    } else {
      return Product.find({
        title: title ? title : { $regex: ".*" },
      });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProduct,
  deleteAll,
  editProduct,
  getAllProducts,
  deleteProduct,
  getProducts,
};
