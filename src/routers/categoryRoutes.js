const express = require('express');

const router = express.Router();

const validations = require('../middlewares/validations');
const categoryController = require('../controllers/categoryController');

router.post(
  '/',
  validations.validateToken,
  validations.validateNewCategory,
  categoryController.addCategory,
);

module.exports = router;
