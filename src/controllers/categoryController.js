const categoryService = require('../services/categoryService');

const addCategory = async (req, res) => {
  const result = await categoryService.addCategory(req.body);
  return res.status(result.status).json(result.message);
};

const getAllCategories = async (_req, res) => {
  const result = await categoryService.getAllCategories();
  return res.status(200).json(result);
};

module.exports = {
  addCategory,
  getAllCategories,
};