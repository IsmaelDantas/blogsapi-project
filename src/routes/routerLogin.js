const express = require('express');
const userController = require('../controllers/user.controller');
const { validationLogin } = require('../middlewares/validationLogin');

const routers = express.Router();

routers.post('/', validationLogin, userController.userLogin);

module.exports = routers;