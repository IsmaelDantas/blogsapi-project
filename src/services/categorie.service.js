const { Category } = require('../models');

const newServiceCategory = async (name) => {
  await Category.create(name);
};

const getServiceCategory = async () => {
    const categories = await Category.findAll();
    return categories;
  };

module.exports = { newServiceCategory, getServiceCategory };