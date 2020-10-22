import Sequelize, { Model } from 'sequelize';

class PessoaComplemento extends Model {
    static init(sequelize) {
        super.init({
            cd_pessoa_fisica: Sequelize.INTEGER,
            cd_pessoa_juridica: Sequelize.INTEGER,
            telefone: Sequelize.STRING,
            ramal: Sequelize.STRING,
            email: Sequelize.STRING,
            cep: Sequelize.STRING,
            rua: Sequelize.STRING,
            complemento: Sequelize.STRING,
            bairro: Sequelize.STRING,
            uf: Sequelize.STRING,
            pais: Sequelize.STRING,
        },
        {
            sequelize,
        }
        );

        return this;
    }
}

export default PessoaComplemento;