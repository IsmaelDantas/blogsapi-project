const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const blogPost = sequelize.define('BlogPost', {
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
        blogPost.belongsToMany(models.user,
             { foreignKey: 'userId', as: 'users' })
    }
}