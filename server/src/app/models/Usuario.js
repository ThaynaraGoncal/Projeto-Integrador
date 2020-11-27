import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            apelido: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            cd_pessoa_fisica: Sequelize.INTEGER,
        },
            {
                sequelize,
            }
        );

        this.addHook('beforeSave', async (usuario) => {
            if (usuario.password) {
                usuario.password_hash = await bcrypt.hash(usuario.password, 8);
            }
        });

        return this;
    }


    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default Usuario;