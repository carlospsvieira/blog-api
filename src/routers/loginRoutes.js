const express = require('express');

const router = express.Router();
const checkForUser = require('../controllers/loginController');

router.post('/', checkForUser);

module.exports = router;
