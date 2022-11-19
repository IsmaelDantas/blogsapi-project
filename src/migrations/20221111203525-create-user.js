'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      display_name: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true,
      },  
      password: Sequelize.STRING, 
      image: Sequelize.STRING,
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
  }
};