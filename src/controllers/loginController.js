const checkForUserModel = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await checkForUserModel({ email, password });
  if (result.token) {
    return res.status(result.status).json({ token: result.token });
  }
  return res.status(result.status).json({ message: result.message });
};

module.exports = login;
