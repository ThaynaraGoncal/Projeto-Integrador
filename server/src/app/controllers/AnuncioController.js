const { QueryTypes, Sequelize } = require('sequelize');

import Anuncio from '../models/Anuncio';
import database from '../../config/database';

class AnuncioController {
    async store(req, res) {

        try {
            //console.log(req.body);
            let anuncio = await Anuncio.create(req.body);

            //console.log('anuncio', anuncio)

            return res.status(200).json({ msg: 'Anúncio Inserido com sucesso' });

        } catch (error) {
            console.log(error);
            //return res.status(400).json({ error: 'Não foi possível criar o anúncio' });
        }
    }

    async index(req, res) {
        const sequelize = new Sequelize(database);

        const anuncios = await sequelize
            .query(`select titulo, categoria, descricao from anuncios`,
                { type: QueryTypes.SELECT }).then(user => {
                    return user
                });

        console.log('Anuncios', anuncios)

        return res.status(200).json({ anuncios });

    }
}

export default new AnuncioController;