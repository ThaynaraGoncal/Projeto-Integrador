'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa_juridicas',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      cd_pessoa_juridica: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      razao_social: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_fantasia: {
        type: Sequelize.STRING,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      dt_criacao_cnpj: {
        type: Sequelize.DATE,
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pessoa_juridicas');
  }
};
