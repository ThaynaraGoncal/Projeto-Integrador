'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'avaliacoes',
      'cd_pessoa_avaliou',
      {
        type: sequelize.INTEGER,
        references: { model: 'pessoa_fisicas', key: 'cd_pessoa_fisica' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('avaliacoes', 'cd_pessoa_avaliou');
  }
};
