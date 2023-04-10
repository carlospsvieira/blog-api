const postService = require('../services/postService');

const addNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;
  const result = await postService.addNewPost({ title, content, categoryIds, userId });
 
  return res.status(result.status).json(result.message);
};

module.exports = {
  addNewPost,
};
