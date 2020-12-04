'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'pessoa_fisicas',
      'telefone',
      {
        type: sequelize.STRING,
        allowNull: false,
      });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('pessoa_fisicas', 'telefone');
  }
};
