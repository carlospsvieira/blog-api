const categoryService = require('../services/categoryService');

const addCategory = async (req, res) => {
  const result = await categoryService.addCategory(req.body);
  return res.status(result.status).json(result.message);
};

module.exports = {
  addCategory,
};