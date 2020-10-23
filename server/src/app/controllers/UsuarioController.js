const { QueryTypes, Sequelize } = require('sequelize');

import Usuario from '../models/Usuario';
import PessoaFisica from '../models/PessoaFisica';
import PessoaJuridica from '../models/PessoaJuridica';
import PessoaJuridicaController from '../controllers/PessoaJuridicaController';
import PessoaFisicaController from '../controllers/PessoaFisicaController';
import database from '../../config/database';

class UsuarioController {
    async store(req, res) {
        const sequelize = new Sequelize(database);
        //console.log('req', req.body)
        try {

            if (req.body.password == '') {
                res.status(201).json({ info: 'Defina uma senha' });
            }

            let usuario_cadastrado = await Usuario.create(req.body);

            if (usuario_cadastrado) {

                const usuario = await sequelize
                    .query(`select nome, to_char(dt_nascimento, 'dd/mm/yyyy') dt_nascimento,  email, telefone
                        from usuarios usu inner join pessoa_fisicas pf on pf.cd_pessoa_fisica = usu.cd_pessoa_fisica 
                         inner join pessoa_complementos pc on pc.cd_pessoa_fisica = pf.cd_pessoa_fisica 
                        where  usu.cd_pessoa_fisica ='${req.body.cd_pessoa_fisica}'`,
                        { type: QueryTypes.SELECT }).then(user => {
                            return user[0]
                        });

                //console.log('usuario', usuario)


                return res.status(201).json({ usuario });
            } else {
                return res.status(201).json({ info: 'Erro ao cadastrar usuario' });
            }


        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Não foi possível criar usuario' });
        }
    }

    async index(req, res) {
        const sequelize = new Sequelize(database);

        const usuarios = await sequelize
            .query(`select pj.cd_pessoa_juridica cd_pessoa, pj.razao_social nome, pj.cnpj cpf_cnpj
            from usuarios usu inner join pessoa_juridicas pj on usu.cd_pessoa_juridica = pj.cd_pessoa_juridica
            union all
            select pf.cd_pessoa_fisica , pf.nome, pf.cpf cpf_cnpj
            from usuarios usu inner join pessoa_fisicas pf on usu.cd_pessoa_fisica = pf.cd_pessoa_fisica`,
                { type: QueryTypes.SELECT });

        return res.json({ usuarios });
    }

    async user(req, res) {
        const sequelize = new Sequelize(database);
        //console.log(req.query)
        let result = await sequelize
            .query(`select cd_pessoa_fisica, nome, cpf, rg, dt_nascimento from pessoa_fisicas where cpf =  '${req.query.cpf}' `,
                { type: QueryTypes.SELECT });
        console.log(result[1].rowCount)
        const pessoa = result[0];
        //console.log(pessoa)

        return res.status(200).json(pessoa[0]);
    }

}

export default new UsuarioController();