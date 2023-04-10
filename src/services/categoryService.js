const { Category } = require('../models');

const addCategory = async (request) => {
  const { name } = request;
  
  await Category.create({ name });

  return { status: 201, message: { name } };
};

const getAllCategories = async () => {
   const categories = await Category.findAll();
   return categories;
};

module.exports = {
  addCategory,
  getAllCategories,
};