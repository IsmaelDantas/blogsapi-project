const express = require('express');
const { categoryNew, categoryGet } = require('../controllers/categorie.controller');
const { validateName } = require('../middleware/validateCategory');
const { validationToken } = require('../middleware/validationToken');

const routerCategory = express.Router();

routerCategory.post('/', validationToken, validateName, categoryNew);

routerCategory.get('/', validationToken, categoryGet);

module.exports = routerCategory;