const createNewUser = require('../services/userService');

const newUser = async (req, res) => {
  const { body } = req;
  const result = await createNewUser(body);
  if (result.token) {
    return res.status(result.status).json({ token: result.token });
  }
  return res.status(result.status).json({ message: result.message });
};

module.exports = newUser;