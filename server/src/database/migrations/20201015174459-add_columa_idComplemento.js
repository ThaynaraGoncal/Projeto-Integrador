'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'pessoa_fisicas',
      'id_complemento',
      {
        type: sequelize.INTEGER,
        references: { model: 'pessoa_complementos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('pessoa_fisicas', 'id_complemento');
  }
};
