const { userService } = require('../services/user.service');

const postUser = async (req, res) => {
  const data = req.body;
  const { type, message } = await userService(data);
  if (type) {
    return res.status(409).json({ message });
  }
  return res.status(201).json({ token: message });
};

module.exports = { postUser };