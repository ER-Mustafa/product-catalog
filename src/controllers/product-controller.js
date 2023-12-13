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
