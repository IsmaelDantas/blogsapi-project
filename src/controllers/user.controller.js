const { userService, getServiceUsers } = require('../services/user.service');

const postUser = async (req, res) => {
  const data = req.body;
  const { type, message } = await userService(data);
  if (type) {
    return res.status(409).json({ message });
  }
  return res.status(201).json({ token: message });
};

const getUsers = async (_req, res) => {
  const result = await getServiceUsers();
  return res.status(200).json(result);
};

module.exports = { postUser, getUsers };