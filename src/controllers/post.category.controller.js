const { newServicePost,
  getServicePosts,
  getByIdServicePosts } = require('../services/post.category.service');

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

module.exports = { postsNew, postsGet, getByIdPost };