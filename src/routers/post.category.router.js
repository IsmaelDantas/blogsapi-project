const express = require('express');
const controllerPost = require('../controllers/post.category.controller');
const { validationPosts,
     validationCategory, validationBody } = require('../middleware/validationPost');
const { validationToken } = require('../middleware/validationToken');

const routerPost = express.Router();

routerPost.get('/', validationToken, controllerPost.postsGet);

routerPost.post('/', validationToken, validationPosts, validationCategory, controllerPost.postsNew);

routerPost.get('/:id', validationToken, controllerPost.getByIdPost);

routerPost.put('/:id', validationBody, validationToken, controllerPost.updatePost);

module.exports = routerPost;