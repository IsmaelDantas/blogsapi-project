const { BlogPost, PostCategory, User, Category } = require('../models');

const newServicePost = async (id, { title, content, categoryIds }) => {
    const { dataValues } = await BlogPost.create({
        userId: id,
        title,
        content,
        categoryIds,
    });
    const data = categoryIds.map((categoryId) =>
        PostCategory.create({ postId: dataValues.id, categoryId }));
  await Promise.all(data);
  return dataValues;
};

const getServicePosts = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const getByIdServicePosts = async (id) => {
    const byIdPosts = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    if (!byIdPosts) {
      return { type: 'error', message: 'Post does not exist' };
    }
    return byIdPosts;
  };

  const postServiceUpdate = async (id, { title, content }, userId) => {
    const [postsGet] = await getServicePosts();
    if (postsGet.dataValues.userId === userId) {
      const [updatePost] = await BlogPost.update(
        {
          title,
          content,
        },
        { where: { id } },
      );
      return updatePost > 0;
    }
    return { type: 'error', message: 'Unauthorized user' };
  };

  const postDelete = async (id, userId) => {
    const postGet = await getByIdServicePosts(id);
    if (postGet.type) { return { status: 404, message: 'Post does not exist' }; }
    if (postGet.userId !== userId) { return { status: 401, message: 'Unauthorized user' }; }
    return { status: 204, message: null };
  };
  
module.exports = { 
  newServicePost, 
  getServicePosts, 
  getByIdServicePosts, 
  postServiceUpdate, 
  postDelete,
};