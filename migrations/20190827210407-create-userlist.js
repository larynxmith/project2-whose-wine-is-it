'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wine: {
        type: Sequelize.STRING
      },
      appellation: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      vintage: {
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER
      },
      tasted: {
        type: Sequelize.BOOLEAN
      },
      wishlist: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userlists');
  }
};