const sequelize = require("sequelize");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const userModel = sequelize.define('user', {
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

    userModel.associate = (models) => {
        userModel.hasOne(models.blogPost,
            { foreignKey: 'userId', as: 'posts' })
    }

    return userModel;
}