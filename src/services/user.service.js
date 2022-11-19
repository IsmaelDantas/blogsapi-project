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

const getServiceUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

const getByIdUserService = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: 'password' },
  });
  return user;
};

module.exports = { userService, getServiceUsers, getByIdUserService };