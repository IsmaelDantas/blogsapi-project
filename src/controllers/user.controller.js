const userService = require('../services/user.service');

const login = async (req, res) => {
    const { email, password } = req.body;
    const token = await userService.userLogin(email, password);
    if (token.type) {
        return res.status(400).json({ message: token.message });
    }
    return res.status(200).json({ token });
};

module.exports = { login };