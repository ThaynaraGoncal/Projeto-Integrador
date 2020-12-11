const { QueryTypes, Sequelize } = require('sequelize');

import Usuario from '../models/Usuario';
import PessoaFisica from '../controllers/PessoaFisicaController';
import database from '../../config/database';
import moment from 'moment';
import senEmail from '../../config/senMail';
class UsuarioController {

  async store(req, res) {
    const sequelize = new Sequelize(database);

    try {

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

      //Cadastra a Pessoa Fisica
      let pessoa = await PessoaFisica.store(req.body);

      if (pessoa.info) {
        return res.status(201).json({ info: pessoa.info })
      }

      const user = {
        apelido: req.body.apelido,
        email: req.body.email,
        password: req.body.password,
        cd_pessoa_fisica: pessoa.id
      }

      let usuario = await Usuario.create(user);

      if (usuario) {
        const usuraioJson = {
          cd_pessoa_fisica: pessoa.id,
          nome: pessoa.nome,
          apelido: usuario.dataValues.apelido,
          dt_nascimento: pessoa.dt_nascimento,
          cpf: pessoa.cpf,
          email: usuario.dataValues.email,
          telefone: req.body.telefone
        }

        return res.status(201).json(usuraioJson);
      }

      return res.status(201).json({ info: 'Não foi possível criar o usuário' });

    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Não foi possível criar usuario' });
    }
  }

  async user(req, res) {
    const sequelize = new Sequelize(database);

    try {

      if (req.query.email === '' || req.query.email === undefined) {
        res.status(201).json({ info: 'Informe um email' });
      }
      if (req.query.password === '' || req.query.password === undefined) {
        res.status(201).json({ info: 'Informe uma senha' });
      }

      req.query.email = req.query.email.toUpperCase();

      let user = await sequelize
        .query(`select usu.cd_pessoa_fisica, nome, apelido, email, telefone, cpf, 
            to_char(dt_nascimento, 'dd/mm/yyy') dt_nascimento 
          from usuarios usu inner join pessoa_fisicas pf on 
          pf.cd_pessoa_fisica = usu.cd_pessoa_fisica 
          where UPPER(email) = '${req.query.email}' and password = '${req.query.password}'`,
          { type: QueryTypes.SELECT }).then(user => {
            return user[0]
          });

      if (user) {
        return res.status(201).json(user);
      } else {
        return res.status(201).json({ info: 'Login ou Senha inválidos!' });
      }

    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Não foi possível criar usuario' });
    }
  }

  async userUpdate(req, res) {
    const sequelize = new Sequelize(database);

    try {
      let cpf = req.body.cpf;
      cpf = cpf.replace('.', '');
      cpf = cpf.replace('-', '');
      let telefone = req.body.telefone
      telefone = telefone.replace(' ', '');
      req.body.dt_nascimento = moment(req.body.dt_nascimento, "DD/MM/YYYY").format("YYYY-MM-DD");

      let update_pessoa = await sequelize
        .query(`update pessoa_fisicas 
                set nome = '${req.body.nome}', cpf = '${cpf}', 
                dt_nascimento = '${req.body.dt_nascimento}', telefone = '${telefone}'
                where  cd_pessoa_fisica = ${req.body.cd_pessoa}`,
          { type: QueryTypes.SELECT }).then((res) => {
            return res
          });

      let update_usuario = await sequelize
        .query(`update usuarios 
              set apelido = '${req.body.apelido}', email = '${req.body.email}'
              where  cd_pessoa_fisica = ${req.body.cd_pessoa}`,
          { type: QueryTypes.SELECT }).then((res) => {
            return res
          });
      //console.log(update_pessoa);

      return res.status(201).json({ info: 'Dados atualizados com sucesso!' });

    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Não foi possível criar usuario' });
    }
  }

  async updateSenha(req, res) {
    const sequelize = new Sequelize(database);

    try {

      const { email } = req.query;

      let emailUpper = email.toUpperCase();

      let user = await sequelize
        .query(`select apelido, email
        from usuarios 
        where UPPER(email) = '${emailUpper}'`,
          { type: QueryTypes.SELECT }).then(user => {
            return user[0]
          });

      if (user === undefined) {
        return res.status(201).json({ msg: 'Usuário não encontrado!' });
      }

      const usuario = user.apelido;

      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      let nova_senha = getRandomIntInclusive(100000, 999999);

      await sequelize
        .query(`update usuarios 
            set password = ${nova_senha}
            where  UPPER(email) = '${emailUpper}'`,
          { type: QueryTypes.SELECT }).then((res) => {
            return res
          });

      senEmail(usuario, email, nova_senha);

      return res.status(201).json({ info: `Nova senha enviada para ${email}` });

    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Não foi possível enviar email' });
    }
  }

  async alteraSenha(req, res) {
    const sequelize = new Sequelize(database);
    console.log('req', req.query);
    try {

      const { senha_atual, nova_senha } = req.query;

      let user = await sequelize
        .query(`select password, apelido, email
        from usuarios 
        where password = '${senha_atual}'`,
          { type: QueryTypes.SELECT }).then(user => {
            return user[0]
          });

      if (user === undefined) {
        return res.status(201).json({ msg: `Senha atual não confere!` });
      }

      console.log('user', user);

      await sequelize
        .query(`update usuarios 
          set password = ${nova_senha}
          where  password = '${user.password}'`,
          { type: QueryTypes.UPDATE }).then((res) => {
            return res
          });


      senEmail(user.apelido, user.email, nova_senha);

      return res.status(201).json({ info: `Senha alterada! Nova senha enviada para ${user.email}` });

    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Não foi possível enviar email' });
    }

  }

}

export default new UsuarioController();