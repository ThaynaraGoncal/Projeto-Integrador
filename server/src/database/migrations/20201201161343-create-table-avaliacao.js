'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('avaliacoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_anuncio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'anuncios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      texto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      like: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('avaliacoes');
  }
};
