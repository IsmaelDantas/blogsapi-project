const { newServiceCategory, getServiceCategory } = require('../services/categorie.service');

const categoryNew = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  await newServiceCategory(name);
  return res.status(201).json({ name });
};

const categoryGet = async (_req, res) => {
    const result = await getServiceCategory();
    return res.status(200).json(result);
  };

module.exports = { categoryNew, categoryGet };