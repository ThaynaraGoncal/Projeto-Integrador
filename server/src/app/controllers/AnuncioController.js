const { QueryTypes, Sequelize } = require('sequelize');

import Anuncio from '../models/Anuncio';
import Arquivo from '../models/Arquivo';
import database from '../../config/database';

import { hostCasa, hostEmpresa } from '../../constants';

class AnuncioController {
  async store(req, res) {
    console.log(req.body);
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

      return res.status(200).json({ info: 'Cadastrado com sucesso!' });

    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Não foi possível criar o anúncio' });
    }
  }

  async index(req, res) {
    console.log('Rota /anuncios requisitada')
    const sequelize = new Sequelize(database);

    const anuncio_list = await sequelize
      .query(` select	   anu.id,
      anu.cd_pessoa_fisica,
      pf.nome, anu.titulo, 
        anu.categoria, 
        anu.descricao, 
        anu.valor, 
        arq.name, 
        arq.path,
        pf.nome, 
        pf.telefone, 
        (select count(avaliacoes.like) from avaliacoes where avaliacoes.like = true and id_anuncio = anu.id) gostei
       from anuncios anu 
       left join arquivos arq on anu.id = arq.id_anuncio
       inner join pessoa_fisicas pf on pf.cd_pessoa_fisica = anu.cd_pessoa_fisica`,
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

    return res.status(200).json(anuncios);

  }

  async indexFiltro(req, res) {
    console.log(req.query);
    const sequelize = new Sequelize(database);

    let sqlWhere = '';
    if (req.query.precoMin != '' && req.query.precoMax != '') {
      sqlWhere = `and valor between '${req.query.precoMin}' and '${req.query.precoMax}'`
    }


    const anuncio_list = await sequelize
      .query(`select anu.id, anu.titulo, anu.categoria, anu.descricao, anu.valor, arq.name, arq.path 
        from anuncios anu left join arquivos arq on anu.id = arq.id_anuncio 
        where anu.categoria = '${req.query.categoria}'
        ${sqlWhere}`,
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

  async indexPrestador(req, res) {

    const sequelize = new Sequelize(database);

    const lista_anuncios = await sequelize
      .query(`select anu.id, anu.cd_pessoa_fisica, anu.titulo, anu.categoria, anu.descricao, anu.valor, arq.name, arq.path from anuncios anu left join arquivos arq on anu.id = arq.id_anuncio where anu.cd_pessoa_fisica = '${req.query.cd_pessoa_fisica}'`,
        { type: QueryTypes.SELECT }).then(user => {
          return user
        });

    const anunciosFiltro = lista_anuncios.filter(
      (v, i, a) => a.findIndex(t => t.id === v.id) === i,
    );

    const anuncios = anunciosFiltro.map(dado => ({ ...dado, path: [] }));

    for (let anuncioF of anuncios) {
      for (let anunciosAll of lista_anuncios) {
        if (anuncioF.id === anunciosAll.id) {
          anuncioF.path.push(`${hostEmpresa}/images/${anunciosAll.path}`);
        }
      }
    }

    return res.status(200).json({ anuncios });

  }

  async deleteAnuncio(req, res) {
    console.log(req.query);
    const sequelize = new Sequelize(database);

    const anuncio_delete = await sequelize
      .query(`delete from anuncios where cd_pessoa_fisica = '${req.query.cd_pessoa_fisica}' and id = '${req.query.id_anuncio}'`,
        { type: QueryTypes.SELECT }).then(item => {
          return item
        });

    const lista_anuncios = await sequelize
      .query(`select anu.id, anu.cd_pessoa_fisica, anu.titulo, anu.categoria, anu.descricao, anu.valor, arq.name, arq.path from anuncios anu left join arquivos arq on anu.id = arq.id_anuncio where anu.cd_pessoa_fisica = '${req.query.cd_pessoa_fisica}'`,
        { type: QueryTypes.SELECT }).then(user => {
          return user
        });

    const anunciosFiltro = lista_anuncios.filter(
      (v, i, a) => a.findIndex(t => t.id === v.id) === i,
    );

    const anuncios = anunciosFiltro.map(dado => ({ ...dado, path: [] }));

    for (let anuncioF of anuncios) {
      for (let anunciosAll of lista_anuncios) {
        if (anuncioF.id === anunciosAll.id) {
          anuncioF.path.push(`${hostEmpresa}/images/${anunciosAll.path}`);
        }
      }
    }

    return res.status(200).json({ info: 'Anuncio Deletado', anuncios });

  }

}

export default new AnuncioController;