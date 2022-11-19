const express = require('express');
const { categoryNew } = require('../controllers/categorie.controller');
const { validateName } = require('../middleware/validateCategory');
const { validationToken } = require('../middleware/validationToken');

const routerCategory = express.Router();

routerCategory.post('/', validationToken, validateName, categoryNew);

module.exports = routerCategory;