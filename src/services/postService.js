const { Category, BlogPost } = require('../models');

const addNewPost = async (request) => {
  const { title, content, userId, categoryIds } = request;

  const categories = await Category.findAll({
    where: { id: categoryIds },
  });

  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });

  await newPost.addCategories(categories);

  return { status: 201, message: newPost };
};

module.exports = {
  addNewPost,
};