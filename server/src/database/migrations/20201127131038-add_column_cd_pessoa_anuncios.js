'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'anuncios',
      'cd_pessoa_fisica',
      {
        type: sequelize.INTEGER,
        references: { model: 'pessoa_fisicas', key: 'cd_pessoa_fisica' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('anuncios', 'cd_pessoa_fisica');
  }
};
