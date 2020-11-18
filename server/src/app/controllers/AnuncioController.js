const { QueryTypes, Sequelize } = require('sequelize');

import Anuncio from '../models/Anuncio';
import Arquivo from '../models/Arquivo';
import database from '../../config/database';

import { hostCasa, hostEmpresa } from '../../constants';

class AnuncioController {
  async store(req, res) {
    console.log(req.body)
    try {

      let anuncio = await Anuncio.create(req.body);
      let { id } = anuncio.dataValues;

      const arquivos = req.files;

      if (arquivos.length > 0) {
        arquivos.map(async (item) => {
          const { originalname: name, filename: path } = item;

          const file = await Arquivo.create({
            name,
            path,
            id_anuncio: id,
          });
        });
      }

      return res.status(200).json({ msg: 'Cadastrado' });

    } catch (error) {
      console.log(error);
      //return res.status(400).json({ error: 'Não foi possível criar o anúncio' });
    }
  }

  async index(req, res) {
    const sequelize = new Sequelize(database);

    const anuncio_list = await sequelize
      .query(`select anu.id, anu.titulo, anu.categoria, anu.descricao, anu.valor, arq.name, arq.path from anuncios anu left join arquivos arq on anu.id = arq.id_anuncio`,
        { type: QueryTypes.SELECT }).then(user => {
          return user
        });

    const anunciosFiltro = anuncio_list.filter(
      (v, i, a) => a.findIndex(t => t.id === v.id) === i,
    );

    const anuncios = anunciosFiltro.map(dado => ({ ...dado, path: [] }));

    for (let anuncioF of anuncios) {
      for (let anunciosAll of anuncio_list) {
        if (anuncioF.id === anunciosAll.id) {
          anuncioF.path.push(`${hostEmpresa}/images/${anunciosAll.path}`);
        }
      }
    }

    return res.status(200).json({ anuncios });

  }
}

export default new AnuncioController;