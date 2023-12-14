const Category = require("../models/category");

const getCategoryByName = async (name) => {
  try {
    const category = await Category.findOne({ name }).exec();
    return category || null;
  } catch (error) {
    throw error;
  }
};

const createCategory = async (req) => {
  const { name, description } = req.body;
  const category = new Category({
    name,
    description,
  });
  try {
    return category.save();
  } catch (error) {
    throw error;
  }
};

const editCategory = async (req) => {
  const { name, description } = req.body;
  try {
    const category = await getCategoryByName(name);
    if (!category) {
      throw new Error("Category not found! Bad Request");
    }
    await Category.updateOne(
      { _id: category._id },
      { $set: { description: description } }
    );
  } catch (error) {
    throw error;
  }
};

const deleteAll = async () => {
  try {
    await Category.deleteMany({});
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCategoryByName,
  createCategory,
  editCategory,
  deleteAll,
};
