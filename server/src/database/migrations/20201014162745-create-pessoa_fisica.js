'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa_fisicas',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      cd_pessoa_fisica: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      rg: {
        type: Sequelize.STRING,
        unique: true,
      },
      dt_nascimento: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('pessoa_fisicas');
  }
};
