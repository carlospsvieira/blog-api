const express = require('express');

const router = express.Router();
const validation = require('../middlewares/validations');
const userController = require('../controllers/userController');

router
  .get('/', validation.validateToken, userController.getAllUsers)
  .get('/:id', validation.validateToken, userController.getUserById)
  .post(
    '/',
    validation.validateDisplayName,
    validation.validateEmailAndPass,
    userController.newUser,
  );

module.exports = router;
