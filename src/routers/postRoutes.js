const express = require('express');

const router = express.Router();
const validation = require('../middlewares/validations');
const postController = require('../controllers/postController');

router
  .get('/', validation.validateToken, postController.getAllPosts)
  .get('/:id', validation.validateToken, validation.validatePostById, postController.getPostById)
  .post(
    '/',
    validation.validateToken,
    validation.validateNewPost,
    postController.addNewPost,
  );

module.exports = router;
