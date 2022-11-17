const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const categoriesModel = sequelize.define('Category', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING(255)
    },
    {
        tableName: 'categories',
        underscored: true
    });

    return categoriesModel;
};