const express = require('express');

const loginController = require('../controllers/login.controller');
const { validationLogin } = require('../middleware/validationLogin');

const router = express.Router();

router.post('/', validationLogin, loginController.login);

module.exports = router;