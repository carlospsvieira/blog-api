const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env; 

const checkForUserModel = async ({ email, password }) => {
  if (!email || !password) {
    return { status: 400, message: 'Some required fields are missing' };
  }
  
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return { status: 400, message: 'Invalid fields' };
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    return { status: 200, token };
};

module.exports = checkForUserModel;