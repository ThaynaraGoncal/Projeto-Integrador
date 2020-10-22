import Sequelize, { Model } from 'sequelize';

class PessoaJuridica extends Model {
    static init(sequelize) {
        super.init({
            cd_pessoa_juridica: Sequelize.INTEGER,
            razao_social: Sequelize.STRING,
            nome_fantasia: Sequelize.STRING,
            cnpj: Sequelize.STRING,
            dt_criacao_cnpj: Sequelize.DATE,
        },
        {
            sequelize,
        }
        );

        return this;
    }
}

export default PessoaJuridica;