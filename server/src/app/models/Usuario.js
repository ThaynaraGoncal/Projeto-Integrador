import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuarios extends Model {
    static init(sequelize) {
        super.init({
            cd_pessoa_fisica: Sequelize.INTEGER,
            cd_pessoa_juridica: Sequelize.INTEGER,
            password: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
        },
            {
                sequelize,
            }
        );

        // this.addHook('beforeSave', async (usuario) => {
        //     if (usuario.password) {
        //         usuario.password_hash = await bcrypt.hash(usuario.password, 8);
        //     }
        // });

        return this;
    }

    static associate(models) {
        this.hasOne(models.PessoaFisica, { foreignKey: 'cd_pessoa_fisica', as: 'Pessoas' });
    }

    static associate(models) {
        this.hasOne(models.PessoaJuridica, { foreignKey: 'cd_pessoa_juridica' });
    }

    // checkPassword(password) {
    //     return bcrypt.compare(password, this.password_hash);
    // }
}

export default Usuarios;