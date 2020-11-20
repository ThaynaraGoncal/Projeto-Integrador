const { QueryTypes, Sequelize } = require('sequelize');

import Usuario from '../models/Usuario';
import database from '../../config/database';

class UsuarioController {
  async store(req, res) {
    const sequelize = new Sequelize(database);

    try {
      //console.log('req', req.body)
      if (req.body.apelido == '') {
        res.status(201).json({ info: 'Informe um Apelido' });
      }
      if (req.body.email == '') {
        res.status(201).json({ info: 'Informe um email' });
      }
      if (req.body.senha == '') {
        res.status(201).json({ info: 'Informe uma senha' });
      }

      let email_exist = await sequelize
        .query(`select email from usuarios where email = '${req.body.email}'`,
          { type: QueryTypes.SELECT }).then(user => {
            return user[0]
          });

      if (email_exist) {
        return res.status(201).json({ info: 'Já existe um cadastro com esse email' });
      }

      let usuario = await Usuario.create(req.body);

      return res.status(201).json({ usuario });


    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Não foi possível criar usuario' });
    }
  }



  async user(req, res) {
    const sequelize = new Sequelize(database);

    try {
      console.log('req', req.query)

      if (req.query.email === '' || req.query.email === undefined) {
        res.status(201).json({ info: 'Informe um email' });
      }
      if (req.query.password === '' || req.query.password === undefined) {
        res.status(201).json({ info: 'Informe uma senha' });
      }

      let user = await sequelize
        .query(`select apelido, email from usuarios where email = '${req.query.email}' and password = '${req.query.password}'`,
          { type: QueryTypes.SELECT }).then(user => {
            return user[0]
          });

      if (user) {
        return res.status(201).json({ user });
      } else {
        return res.status(201).json({ info: 'Login ou Senha inválidos!' });
      }

    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Não foi possível criar usuario' });
    }
  }

}

export default new UsuarioController();