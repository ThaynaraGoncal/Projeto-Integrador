'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'pessoa_complementos',
      'cidade',
      {
        type: sequelize.STRING,
        allowNull: true,
      });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('pessoa_complementos', 'cidade');
  }
};
