const { BlogPost, PostCategory, User, Category } = require('../models');

const newServicePost = async (id, { title, content, categoryIds }) => {
  const { dataValues } = await BlogPost.create({ userId: id, title, content, categoryIds });
  const data = categoryIds.map((categoryId) => PostCategory
    .create({ postId: dataValues.id, categoryId }));
  await Promise.all(data);
  return dataValues;
};

const getServicePosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

module.exports = { newServicePost, getServicePosts };