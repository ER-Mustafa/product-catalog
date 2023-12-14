const productService = require("../services/product-service");

exports.createProduct = async (req, res, next) => {
  try {
    await productService.createProduct(req);
    res.status(201).json({
      message: "Product created successfully!",
    });
  } catch (error) {
    res.status(500).json({
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
    const stat = error.message == "Product not found!" ? 400 : 500;
    res.status(stat).json({
      message: "Product edit failed!",
    });

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
    res.status(500).json({
      message: "Error deleting products!",
    });
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
    res.status(500).json({
      message: "Error getting products!",
    });
    console.error("Error getting products:", error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await productService.deleteProduct(req);
    res.status(200).json({
      message: "Product deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Product deletion failed!",
    });
    console.error("Error deleting product:", error);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts(req);
    res.status(200).json({
      products,
    });
  } catch (error) {
    const stat = error.message == "Category not found!" ? 400 : 500;
    res.status(stat).json({
      message: "Error getting products!",
    });
    console.error("Error getting products:", error);
  }
};
