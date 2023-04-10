const jwt = require('jsonwebtoken');
const { Category } = require('../models');

const { JWT_SECRET } = process.env;

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const validateEmailAndPass = (req, res, next) => {
  const { email, password } = req.body;

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  next();
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const isValid = jwt.verify(token, JWT_SECRET);
    req.user = isValid;

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const validateNewCategory = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

const validateNewPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  const categories = await Category.findAll({
    where: { id: categoryIds },
  });

  if (categories.length !== categoryIds.length) {
    return { status: 400, message: 'one or more "categoryIds" not found' };
  }
  next();
};

module.exports = {
  validateDisplayName,
  validateEmailAndPass,
  validateToken,
  validateNewCategory,
  validateNewPost,
};
