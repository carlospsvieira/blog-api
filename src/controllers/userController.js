const userService = require('../services/userService');

const newUser = async (req, res) => {
  const { body } = req;
  const result = await userService.createNewUser(body);
  if (result.token) {
    return res.status(result.status).json({ token: result.token });
  }
  return res.status(result.status).json({ message: result.message });
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const result = await userService.getUserById(id);
  return res.status(result.status).json(result.message);
};

module.exports = {
  newUser,
  getAllUsers,
  getUserById,
};
