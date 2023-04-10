const express = require('express');

const router = express.Router();

const validations = require('../middlewares/validations');
const categoryController = require('../controllers/categoryController');

router
  .get('/', validations.validateToken, categoryController.getAllCategories)
  .post(
  '/',
  validations.validateToken,
  validations.validateNewCategory,
  categoryController.addCategory,
);

module.exports = router;
