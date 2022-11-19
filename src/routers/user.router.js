const express = require('express');
const postUserController = require('../controllers/user.controller');
const { validationDisplay,
  validationEmail, validationPassword } = require('../middleware/validationUser');
const { validationToken } = require('../middleware/validationToken');

const postUserRouter = express.Router();

postUserRouter.post('/', validationDisplay,
validationEmail, validationPassword, postUserController.postUser);

postUserRouter.get('/', validationToken, postUserController.getUsers);

module.exports = postUserRouter;