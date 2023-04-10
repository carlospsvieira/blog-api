const { Category } = require('../models');

const addCategory = async (request) => {
  const { name } = request;

  if (!name) {
    return { status: 400, message: '"name" is required' };
  }

  await Category.create({ name });

  return { status: 201, message: { name } };
};

module.exports = {
  addCategory,
};