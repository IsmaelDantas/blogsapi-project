const { newServicePost, getServicePosts } = require('../services/post.category.service');

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

module.exports = { postsNew, postsGet };