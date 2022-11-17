const { User } = require('../models');
const jwt = require('../util/jwt');

const userLogin = async ({ email, password }) => {
    const userValidation = await User.findOne({ where: { email } });
    if (userValidation === null || userValidation.password !== password) {
        return { type: 'error', message: 'Invalid Fields' };
    }
    const token = jwt.tokenCreate(email);

    return token;
};

module.exports = { userLogin };