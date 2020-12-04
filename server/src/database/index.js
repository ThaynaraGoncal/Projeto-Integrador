import Sequelize from 'sequelize';

import Usuario from '../app/models/Usuario';
import Anuncio from '../app/models/Anuncio';
import Avaliacoes from '../app/models/Avaliacoes';
import Arquivo from '../app/models/Arquivo';
import PessoaFisica from '../app/models/PessoaFisica';
import PessoaJuridica from '../app/models/PessoaJuridica';
import PessoaComplemento from '../app/models/PessoaComplemento';

import databaseConfig from '../config/database';

const models = [Usuario, Anuncio, Arquivo, PessoaFisica, PessoaJuridica, PessoaComplemento, Avaliacoes];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database;