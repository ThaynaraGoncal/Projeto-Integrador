'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa_complementos',{
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
      },
      cd_pessoa_juridica: {
        type: Sequelize.INTEGER,
        references: { model: 'pessoa_juridicas', key: 'cd_pessoa_juridica' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ramal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      cep:{
        type: Sequelize.STRING,
      },
      rua:{
        type: Sequelize.STRING,
      },
      complemento:{
        type: Sequelize.STRING,
      },
      bairro:{
        type: Sequelize.STRING,
      },
      uf:{
        type: Sequelize.STRING,
      },
      pais:{
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('pessoa_complementos');
  }
};
