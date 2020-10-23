import Sequelize, { Model } from 'sequelize';

class PessoaFisica extends Model {
    static init(sequelize) {
        super.init({
            cd_pessoa_fisica: Sequelize.INTEGER,
            nome: Sequelize.STRING,
            cpf: Sequelize.STRING,
            rg: Sequelize.STRING,
            dt_nascimento: Sequelize.DATE,
        },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.hasOne(models.PessoaComplemento, { foreignKey: 'cd_pessoa_fisica' });
    }
}

export default PessoaFisica;
