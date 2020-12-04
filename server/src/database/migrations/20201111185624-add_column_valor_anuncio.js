'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'anuncios',
      'valor',
      {
        type: sequelize.FLOAT,
        allowNull: true,
      });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('anuncios', 'valor');
  }
};
