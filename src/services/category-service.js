const Category = require("../models/category");

getCategoryByName = async (name) => {
  try {
    const category = await Category.findOne({ name }).exec();
    return category || null;
  } catch (error) {
    console.error("Error getting category by name:", error);
    throw error;
  }
};

createCategory = async (name) => {
  const category = new Category({
    name,
  });
  try {
    return category.save();
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

module.exports = {
  getCategoryByName,
  createCategory,
};
