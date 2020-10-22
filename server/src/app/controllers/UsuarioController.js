const { QueryTypes, Sequelize } = require('sequelize');

import Usuario from '../models/Usuario';
import PessoaFisica from '../models/Pessoa';
import PessoaJuridica from '../models/PessoaJuridica';
import PessoaJuridicaController from '../controllers/PessoaJuridicaController';
import PessoaFisicaController from '../controllers/PessoaFisicaController';
import database from '../../config/database';

class UsuarioController {
    async store(req, res) {

        try {
            let userExists = '';

            if (!((req.body.cpf === '') || (req.body.cpf === undefined))) {

                let pf_encontrada = await PessoaFisica.findOne({ where: { cpf: req.body.cpf } })

                let input_pf = {
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    rg: req.body.rg ? req.body.rg : null,
                    email: req.body.email,
                    dt_nascimento: req.body.dt_nascimento ? req.body.dt_nascimento : 0,
                }

                if (pf_encontrada) {
                    userExists = await Usuario.findOne({ where: { cd_pessoa_fisica: pf_encontrada.dataValues.cd_pessoa_fisica } });

                    if (!userExists) {
                        //Cadastra Usuário
                        const input_usuario = {
                            cd_pessoa_fisica: pf_encontrada.dataValues.cd_pessoa_fisica,
                            provider: req.body.provider,
                            password: req.body.password,
                        }

                        let usuario_cadastrado = await Usuario.create(input_usuario);
                        if (usuario_cadastrado) {
                            return res.status(200).json({ msg: 'Usuário cadastrado com sucesso' });
                        } else {
                            return res.status(400).json({ msg: 'Erro ao cadastrar usuario' });
                        }
                    } else {
                        return res.status(200).json({ msg: 'Usuário já existente.' });
                    }
                } else {
                    //Cadastra a pessoa Fisica
                    let pf_inserido = await PessoaFisicaController.store(input_pf)

                    if (pf_inserido.info) {
                        return res.status(400).json({ info: pf_inserido.info })
                    }
                    //Cadastra usuario
                    const input_usuario = {
                        cd_pessoa_fisica: pf_inserido,
                        provider: req.body.provider,
                        password: req.body.password,
                    }

                    let usuario_cadastrado = await Usuario.create(input_usuario);

                    if (usuario_cadastrado) {
                        return res.status(200).json({ msg: 'Usuário cadastrado com sucesso' });
                    } else {
                        return res.status(400).json({ msg: 'Erro ao cadastrar usuario' });
                    }
                }

            }

            if (!((req.body.cnpj == '') || (req.body.cnpj == undefined))) {
                let pj_encontrada = await PessoaJuridica.findOne({ where: { cnpj: req.body.cnpj } });

                let input_pj = {
                    razao_social: req.body.razao_social,
                    nome_fantasia: req.body.nome_fantasia,
                    cnpj: req.body.cnpj,
                    email: req.body.email,
                    dt_criacao_cnpj: req.body.dt_criacao_cnpj ? req.body.dt_criacao_cnpj : 0,
                }

                if (pj_encontrada) {
                    userExists = await Usuario.findOne({ where: { cd_pessoa_juridica: pj_encontrada.dataValues.cd_pessoa_juridica } });

                    if (!userExists) {
                        //Cadastra Usuário
                        const input_usuario = {
                            cd_pessoa_juridica: pj_encontrada.dataValues.cd_pessoa_juridica,
                            provider: req.body.provider,
                            password: req.body.password,
                        }

                        let usuario_cadastrado = await Usuario.create(input_usuario);
                        if (usuario_cadastrado) {
                            return res.status(200).json({ msg: 'Usuário cadastrado com sucesso' });
                        } else {
                            return res.status(400).json({ msg: 'Erro ao cadastrar usuario' });
                        }
                    } else {
                        return res.status(400).json({ msg: 'Usuário já cadastrado' });
                    }

                } else {
                    //Cadastra a pessoa Juridica
                    let pj_inserido = await PessoaJuridicaController.store(input_pj)

                    if (pj_inserido.info) {
                        return res.status(400).json({ info: pj_inserido.info })
                    }
                    //Cadastra usuario
                    const input_usuario = {
                        cd_pessoa_juridica: pj_inserido,
                        provider: req.body.provider,
                        password: req.body.password,
                    }

                    let usuario_cadastrado = await Usuario.create(input_usuario);

                    if (usuario_cadastrado) {
                        return res.status(200).json({ msg: 'Usuário cadastrado com sucesso' });
                    } else {
                        return res.status(400).json({ msg: 'Erro ao cadastrar usuario' });
                    }
                }
            }

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Não foi possível criar usuario' });
        }
    }

    async index(req, res) {
        // const usuarios = await Usuario.findAll({
        //     attributes: ['cd_pessoa_fisica', 'cd_pessoa_juridica', 'provider', 'password'],
        //     include: [
        //         {
        //             model: PessoaFisica,
        //             attributes: ['razao_social']
        //         },
        //     ],
        // });

        const sequelize = new Sequelize(database)


        const usuarios = await sequelize
            .query(`select pj.cd_pessoa_juridica cd_pessoa, pj.razao_social nome, pj.cnpj cpf_cnpj
            from usuarios usu inner join pessoa_juridicas pj on usu.cd_pessoa_juridica = pj.cd_pessoa_juridica
            union all
            select pf.cd_pessoa_fisica , pf.nome, pf.cpf cpf_cnpj
            from usuarios usu inner join pessoa_fisicas pf on usu.cd_pessoa_fisica = pf.cd_pessoa_fisica`,
                { type: QueryTypes.SELECT });

        return res.json({ usuarios });
    }

}

export default new UsuarioController();