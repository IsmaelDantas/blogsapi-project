require('dotenv/config');

const jwt = require('jsonwebtoken');

const tokenCreate = (data, id) => {
  const token = jwt.sign({ data, id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = { tokenCreate };