const productService = require("../services/product-service");

// req should be { title, description, price, categoryName }
exports.createProduct = async (req, res, next) => {
  try {
    await productService.createProduct(req);
    res.status(201).json({
      message: "Product created successfully!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Product creation failed!",
    });
    console.error("Error creating product:", error);
  }
};

exports.editProduct = async (req, res, next) => {
  try {
    await productService.editProduct(req);
    res.status(200).json({
      message: "Product edited successfully!",
    });
  } catch (error) {
    console.error("Error editing product:", error);
  }
};

exports.deleteAllProducts = async (req, res, next) => {
  try {
    await productService.deleteAll();
    res.status(200).json({
      message: "All products deleted successfully!",
    });
  } catch (error) {
    console.error("Error deleting products:", error);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({
      products,
    });
  } catch (error) {
    console.error("Error getting products:", error);
  }
};
