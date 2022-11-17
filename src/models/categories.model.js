const sequelize = require("sequelize");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const categoriesModel = sequelize.define('categories', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING(255)
    },
    {
        tableName: 'categories',
        underscored: true
    });

    return categoriesModel;
};