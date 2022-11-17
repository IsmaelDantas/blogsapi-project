const sequelize = require("sequelize");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const blogPost = sequelize.define('blogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING(255),
        userId: { type: DataTypes.INTEGER, foreignKey: true },
        published: DataTypes.DATE,
        update: DataTypes.DATE
    },
    {
        tableName: 'blog_posts',
        underscored: true
    });

    blogPost.associate = (models) => {
        blogPost.belongsTo(models.user,
             { foreignKey: 'userId', as: 'users' })
    }
}