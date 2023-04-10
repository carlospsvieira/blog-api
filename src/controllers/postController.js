const postService = require('../services/postService');

const addNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;
  const result = await postService.addNewPost({
    title,
    content,
    categoryIds,
    userId,
  });

  return res.status(result.status).json(result.message);
};

const getAllPosts = async (_req, res) => {
  const result = await postService.getAllPosts();
  return res.status(result.status).json(result.message);
};

module.exports = {
  addNewPost,
  getAllPosts,
};
