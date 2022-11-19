const express = require('express');
const postUserController = require('../controllers/user.controller');
const { validationDisplay,
  validationEmail, validationPassword } = require('../middleware/validationUser');

const postUserRouter = express.Router();

postUserRouter.post('/', validationDisplay,
validationEmail, validationPassword, postUserController.postUser);

module.exports = postUserRouter;