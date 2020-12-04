const { QueryTypes, Sequelize } = require('sequelize');

import PessoaFisica from '../models/PessoaFisica';
import database from '../../config/database';
import moment from 'moment';
import PessoaComplementeController from './PessoaComplementeController';

class PessoaFisicaController {
    async store(req, res) {
        const sequelize = new Sequelize(database);
        console.log('Pessoa que veio do usuario', req);
        try {

            if (req.nome === '' || req.nome === undefined) {
                return ({ info: "Nome não informado!" });
            }

            if (req.cpf === '' || req.cpf === undefined) {
                return ({ info: "CPF não informado!" });
            }

            if (req.dt_nascimento === '' || req.dt_nascimento === undefined) {
                return ({ info: "Data de nascimento não informada!" });
            }

            if (req.telefone === '' || req.telefone === undefined) {
                return ({ info: "Telefone não informado!" });
            }

            if (req.email === '' || req.email === undefined) {
                return ({ info: "Email não informado!" });
            }
            req.telefone = req.telefone.replace('(', '');
            req.telefone = req.telefone.replace(')', '');
            req.telefone = req.telefone.replace('-', '');
            console.log(req.telefone);
            //req.telefone = replace(replace(replace(req.telefone, '(', ''), ')', ''), ' ', '')
            req.dt_nascimento = moment(req.dt_nascimento, "DD/MM/YYYY").format("YYYY-MM-DD");
            console.log('req.dt_nascimento ', req.dt_nascimento)
            const usuarioExistente = await sequelize
                .query(`select cd_pessoa_fisica, replace(replace(cpf, '.',''), '-', '') cpf, dt_nascimento from pessoa_fisicas where cpf = '${req.cpf}'`,
                    { type: QueryTypes.SELECT }).then(user => {
                        return user[0]
                    });

            if (usuarioExistente) {
                console.log('Pessoa Fisica existente');
                return ({ info: 'Já existe um usuário com esse CPF' });
            }

            let email = await sequelize
                .query(`select email from pessoa_complementos where email = '${req.email}'`,
                    { type: QueryTypes.SELECT }).then(user => {
                        return user[0]
                    });

            if (email) {
                return ({ info: 'Já existe um usuário com esse Email' });
            }

            const pessoa = await PessoaFisica.create(req);
            //console.log('pessoa inserida', pessoa)

            return (pessoa.dataValues);
            // if (pessoa) {
            //     console.log('Pessoa Fisica cadastrada');

            //     let dados_compl = {
            //         cd_pessoa_fisica: pessoa.dataValues.cd_pessoa_fisica,
            //         telefone: req.body.telefone,
            //         email: req.body.email
            //     }

            //     let p_compl = await PessoaComplementeController.store(dados_compl);

            //     if (p_compl) {
            //         return res.status(200).json({ cd_pessoa_fisica: `${dados_compl.cd_pessoa_fisica}` });
            //     } else {
            //         return res.status(200).json({ info: 'Erro ao cadastrar!' });
            //     }

            // }

        } catch (error) {
            console.log(error)
        }
    }
}


export default new PessoaFisicaController;