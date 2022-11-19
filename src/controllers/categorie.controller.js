const { newServiceCategory } = require('../services/categorie.service');

const categoryNew = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  await newServiceCategory(name);
  res.status(201).json({ name });
};

module.exports = { categoryNew };