const { QueryTypes, Sequelize } = require('sequelize');

import Anuncio from '../models/Anuncio';
import Arquivo from '../models/Arquivo';
import database from '../../config/database';

class AnuncioController {
    async store(req, res) {

        try {
            console.log(req.body);

            let anuncio = await Anuncio.create(req.body);
            let { id } = anuncio.dataValues;

            if (req.file) {
                const { originalname: name, filename: path } = req.file;

                const file = await Arquivo.create({
                    name,
                    path,
                    id_anuncio: id,
                });
            }

            return res.status(200).json({ anuncio });

        } catch (error) {
            console.log(error);
            //return res.status(400).json({ error: 'Não foi possível criar o anúncio' });
        }
    }

    async index(req, res) {
        const sequelize = new Sequelize(database);

        const anuncios = await sequelize
            .query(`select anu.id, anu.titulo, anu.categoria, anu.descricao, anu.valor, arq.name, arq.path from anuncios anu left join arquivos arq on anu.id = arq.id_anuncio`,
                { type: QueryTypes.SELECT }).then(user => {
                    return user
                });

        console.log('Anuncios', anuncios)

        return res.status(200).json({ anuncios });

    }
}

export default new AnuncioController;