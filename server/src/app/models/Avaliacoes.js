import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Avaliacoes extends Model {
    static init(sequelize) {
        super.init({
            id_anuncio: Sequelize.INTEGER,
            titulo: Sequelize.STRING,
            texto: Sequelize.STRING,
            like: Sequelize.BOOLEAN,
            cd_pessoa_avaliou: Sequelize.INTEGER,
        },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Avaliacoes;