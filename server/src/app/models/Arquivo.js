import Sequelize, { Model } from 'sequelize';

class Arquivo extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            path: Sequelize.STRING,
            id_anuncio: Sequelize.INTEGER,
        },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.hasOne(models.Anuncio, { foreignKey: 'id' });
    }
}

export default Arquivo;