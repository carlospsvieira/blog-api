const { Category, BlogPost, User } = require('../models');

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

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      { model: Category, as: 'categories', attributes: ['id', 'name'] },
    ],
  });

  return { status: 200, message: posts };
};

module.exports = {
  addNewPost,
  getAllPosts,
};
