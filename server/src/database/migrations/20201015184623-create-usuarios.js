'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cd_pessoa_fisica: {
        type: Sequelize.INTEGER,
        references: { model: 'pessoa_fisicas', key: 'cd_pessoa_fisica' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      cd_pessoa_juridica: {
        type: Sequelize.INTEGER,
        references: { model: 'pessoa_juridicas', key: 'cd_pessoa_juridica' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable('usuarios');
  }
};
