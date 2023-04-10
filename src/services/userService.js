const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const createNewUser = async (request) => {
  const { displayName, email, password, image } = request;

  const user = await User.findOne({ where: { email } });
  if (user) {
    return { status: 409, message: 'User already registered' };
  }

  const token = jwt.sign({ password, email }, JWT_SECRET, {
    expiresIn: '1h',
  });

  await User.create({ displayName, email, password, image });

  return { status: 201, token };
};

const getAllUsers = async () => {
  const usersList = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return usersList;
};

module.exports = {
  createNewUser,
  getAllUsers,
};
