const postService = require("../services/postService");
const { Op } = require('sequelize');
const { BlogPost, Category } = require('../models')

const addNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  // Check if all required fields are present
  if (!title || !content || !categoryIds) {
    return res
      .status(400)
      .json({ message: "Some required fields are missing" });
  }

  // Find all categories with the given IDs
  const categories = await Category.findAll({
    where: { id: { [Op.in]: categoryIds } },
  });

  // Check if all categories were found
  if (categories.length !== categoryIds.length) {
    return res
      .status(400)
      .json({ message: 'one or more "categoryIds" not found' });
  }

  // Create the blog post using the authenticated user's ID
  const blogPost = await BlogPost.create({
    title,
    content,
    userId: req.user.id,
    published: new Date(),
    updated: new Date(),
  });

  // Add the categories to the blog post
  await blogPost.addCategories(categories);

  // Return the created blog post with status 201
  return res.status(201).json(blogPost);
};

module.exports = {
  addNewPost,
};
