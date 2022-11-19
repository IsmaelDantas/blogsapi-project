const { userService, getServiceUsers, getByIdUserService } = require('../services/user.service');

const postUser = async (req, res) => {
  const data = req.body;
  const { type, message } = await userService(data);
  if (type) {
    return res.status(409).json({ message });
  }
  return res.status(201).json({ token: message });
};

const getUsers = async (_req, res) => {
  const show = await getServiceUsers();
  return res.status(200).json(show);
};

const getByIdUser = async (req, res) => {
  const { id } = req.params;
  const user = await getByIdUserService(Number(id));
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(user);
};

module.exports = { postUser, getUsers, getByIdUser };