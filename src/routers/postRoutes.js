const express = require('express');

const router = express.Router();
const validation = require('../middlewares/validations');
const postController = require('../controllers/postController');

router
  .get('/', validation.validateToken)
  .get('/:id', validation.validateToken)
  .post(
    '/',
    validation.validateToken,
    validation.validateNewPost,
    postController.addNewPost,
  );

module.exports = router;
