const { Category } = require('../models');

const newServiceCategory = async (name) => {
  await Category.create(name);
};

module.exports = { newServiceCategory };