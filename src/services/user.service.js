const { User } = require('../models');
const jwt = require('../util/jwt');

const userService = async ({ displayName, email, password, image }) => {
  const users = await User.findOne({ where: { email } });
  if (users) {
    return { type: 'error', message: 'User already registered' };
  }
  await User.create({ displayName, email, password, image });
  const token = jwt.tokenCreate(email);
  return { type: null, message: token };
};

module.exports = { userService };