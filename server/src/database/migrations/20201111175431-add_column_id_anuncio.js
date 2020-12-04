'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'arquivos',
      'id_anuncio',
      {
        type: sequelize.INTEGER,
        references: { model: 'anuncios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('arquivos', 'id_anuncio');
  }
};
