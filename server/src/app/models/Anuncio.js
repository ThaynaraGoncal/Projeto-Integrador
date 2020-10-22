import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Anuncio extends Model {
    static init(sequelize) {
        super.init({
            titulo: Sequelize.STRING,
            descricao: Sequelize.STRING,
            categoria: Sequelize.INTEGER,
            archivo_photo: Sequelize.STRING,
        },
        {
            sequelize,
        }
        );

        return this;
    }
}

export default Anuncio;