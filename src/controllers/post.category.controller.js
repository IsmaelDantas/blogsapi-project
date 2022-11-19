const { 
  newServicePost,
  getServicePosts,
  getByIdServicePosts,
  postServiceUpdate,
  postDelete,
 } = require('../services/post.category.service');

const postsNew = async (req, res) => {
  const data = req.body;
  const { id } = req.user;
  const result = await newServicePost(id, data);
  if (result) {
    return res.status(201).json(result);
  }
};

const postsGet = async (_req, res) => {
  const posts = await getServicePosts();
  return res.status(200).json(posts);
};

const getByIdPost = async (req, res) => {
  const { id } = req.params;
  const byIdPost = await getByIdServicePosts(id);
  if (byIdPost.type) {
    return res.status(404).json({ message: byIdPost.message });
  } 
  return res.status(200).json(byIdPost);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const { id: userId } = req.user;
  const up = await postServiceUpdate(id, data, userId);
  const postUpdated = await getByIdServicePosts(id);
  if (up.type) {
    return res.status(401).json({ message: up.message });
  }
  return res.status(200).json(postUpdated);
};

const postRemove = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const remover = await postDelete(id, userId);
  return res.status(remover.status).json({ message: remover.message });
};

module.exports = { 
  postsNew, 
  postsGet, 
  getByIdPost, 
  updatePost, 
  postRemove,
};