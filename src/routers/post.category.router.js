const express = require('express');
const controllerPost = require('../controllers/post.category.controller');
const { validationPosts, validationCategory } = require('../middleware/validationPost');
const { validationToken } = require('../middleware/validationToken');

const postRouter = express.Router();

postRouter.get('/', validationToken, controllerPost.postsGet);

postRouter.post('/', validationToken, validationPosts, validationCategory, controllerPost.postsNew);

module.exports = postRouter;