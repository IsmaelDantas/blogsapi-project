const { User } = require('../models/User');
const jwtToken = require('../util/jwt');

const loginValidation = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (user === null || user.password !== password) {
    return { type: 'erro', message: 'Invalid fields' };
  }
  const token = jwtToken.tokenCreate(email);
  return token;
};

module.exports = {
  loginValidation,
};