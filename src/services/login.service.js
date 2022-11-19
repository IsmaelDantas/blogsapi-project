const { User } = require('../models');
const jwtToken = require('../util/jwt');

const loginValidation = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (user === null || user.password !== password) {
    return { type: 'erro', message: 'Invalid fields' };
  }
  const token = jwtToken.tokenCreate(email, user.id);
  return token;
};

const getServiceUser = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

module.exports = {
  loginValidation,
  getServiceUser,
};