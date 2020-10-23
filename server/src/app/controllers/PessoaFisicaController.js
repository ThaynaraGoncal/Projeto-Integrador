const { QueryTypes, Sequelize } = require('sequelize');

import PessoaFisica from '../models/PessoaFisica';
import database from '../../config/database';
import moment from 'moment';
import PessoaComplementeController from './PessoaComplementeController';

class PessoaFisicaController {
    async store(req, res) {
        const sequelize = new Sequelize(database);
        console.log(req.body)
        try {

            if (req.body.nome === '' || req.body.nome === undefined) {
                return res.status(201).json({ info: "Nome não informado!" });
            }

            if (req.body.cpf === '' || req.body.cpf === undefined) {
                return res.status(201).json({ info: "CPF não informado!" });
            }

            if (req.body.dt_nascimento === '' || req.body.dt_nascimento === undefined) {
                return res.status(201).json({ info: "Data de nascimento não informada!" });
            }

            if (req.body.email === '' || req.body.email === undefined) {
                return res.status(201).json({ info: "Email não informado!" });
            }

            req.body.dt_nascimento = moment(req.body.dt_nascimento, "DD/MM/YYYY").format("YYYY-MM-DD");

            const usuarioExistente = await sequelize
                .query(`select cd_pessoa_fisica, replace(replace(cpf, '.',''), '-', '') cpf, dt_nascimento from pessoa_fisicas where cpf = '${req.body.cpf}'`,
                    { type: QueryTypes.SELECT }).then(user => {
                        return user[0]
                    });

            if (usuarioExistente) {
                console.log('Pessoa Fisica existente');
                return res.status(201).json({ info: 'Já existe um usuário com esse CPF' });
            }

            let email = await sequelize
                .query(`select email from pessoa_complementos where email = '${req.body.email}'`,
                    { type: QueryTypes.SELECT }).then(user => {
                        return user[0]
                    });

            if (email) {
                return res.status(201).json({ info: 'Já existe um usuário com esse Email' });
            }

            const pessoa = await PessoaFisica.create(req.body);

            if (pessoa) {
                console.log('Pessoa Fisica cadastrada');

                let dados_compl = {
                    cd_pessoa_fisica: pessoa.dataValues.cd_pessoa_fisica,
                    telefone: req.body.telefone,
                    email: req.body.email
                }

                let p_compl = await PessoaComplementeController.store(dados_compl);

                if (p_compl) {
                    return res.status(200).json({ cd_pessoa_fisica: `${dados_compl.cd_pessoa_fisica}` });
                } else {
                    return res.status(200).json({ info: 'Erro ao cadastrar!' });
                }


            }

        } catch (error) {
            console.log(error)
        }
    }
}


export default new PessoaFisicaController;