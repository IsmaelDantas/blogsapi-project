'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      displayName: {
        type: Sequelize.STRING(255),
        field: 'display_name'
      },

      email: {
        type: Sequelize.STRING(255),
        isEmail: true,
        unique: true
      },

      password: {
        type: Sequelize.STRING(255)
      },

      image: {
        type: Sequelize.STRING(255)
      },
    });
  },  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
