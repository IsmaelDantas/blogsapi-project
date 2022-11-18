const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        displayName: DataTypes.STRING(255),
        email: DataTypes.STRING(255),
        password: DataTypes.STRING(255),
        image: DataTypes.STRING(255)
    },
    {
        tableName: 'users',
        underscored: true
    });

    User.associate = (models) => {
        User.hasOne(models.blogPost,
            { foreignKey: 'userId', as: 'posts' })
    }

    return User;
}