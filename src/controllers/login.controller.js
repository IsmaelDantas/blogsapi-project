const loginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginService.loginValidation(email, password);
  if (token.type) {
    return res.status(400).json({ message: token.message });
  }
  return res.status(200).json({ token });
};

module.exports = { login };