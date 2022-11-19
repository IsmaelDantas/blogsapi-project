const validationPosts = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
       return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
  };
  
  const validationCategory = async (req, res, next) => {
    const { categoryIds } = req.body;
    const categoryVerify = categoryIds.some((category) => category > 2);
    if (categoryVerify === true) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
      }
      next();
    };
    
module.exports = { validationPosts, validationCategory };