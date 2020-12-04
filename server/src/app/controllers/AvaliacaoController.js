const { QueryTypes, Sequelize } = require('sequelize');

import Avaliacao from '../models/Avaliacoes';
import database from '../../config/database';

import { hostCasa, hostEmpresa } from '../../constants';

class AvaliacoesController {
  async store(req, res) {
    console.log(req.body);
    try {

      if (req.body.titulo === '' || req.body.titulo === undefined) {
        return res.status(200).json({ msg: 'Informe um título!' });
      }

      let avaliou = await Avaliacao.create(req.body);
      console.log('avaliou', avaliou.dataValues)

      if (avaliou?.dataValues) {
        return res.status(200).json({ info: 'Obrigado por avaliar!' });
      }

      return res.status(200).json({ info: 'Houve um erro ao avaliar' });

    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Não foi possível criar o anúncio' });
    }
  }

  async index(req, res) {
    const sequelize = new Sequelize(database);
    console.log(req.query)

    const anuncio_list = await sequelize
      .query(`select ava.id, ava.id_anuncio, ava.titulo, ava.texto, ava.like, ava.cd_pessoa_avaliou, pf.nome 
        from   avaliacoes ava inner join pessoa_fisicas pf on pf.cd_pessoa_fisica = ava.cd_pessoa_avaliou 
        where  id_anuncio = ${req.query.id_anuncio}`,
        { type: QueryTypes.SELECT }).then(user => {
          return user
        });

    // const anunciosFiltro = anuncio_list.filter(
    //   (v, i, a) => a.findIndex(t => t.id_anuncio === v.id_anuncio) === i,
    // );

    // const anuncios = anunciosFiltro.map(dado => ({ ...dado, path: [] }));

    // for (let anuncioF of anuncios) {
    //   for (let anunciosAll of anuncio_list) {
    //     if (anuncioF.id_anuncio === anunciosAll.id_anuncio) {
    //       anuncioF.path.push(`${anunciosAll.titulo}`);
    //     }
    //   }
    // }

    return res.status(200).json(anuncio_list);

  }
}

export default new AvaliacoesController;