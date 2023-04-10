const express = require('express');

const router = express.Router();
const validation = require('../middlewares/validations');
const newUser = require('../controllers/userController');

router.post('/', validation.validateDisplayName, validation.validateEmailAndPass, newUser);

module.exports = router;
