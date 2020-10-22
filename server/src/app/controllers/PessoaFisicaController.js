import PessoaFisica from '../models/Pessoa';
import PessoaComplemento from '../models/PessoaComplemento';
import PessoaComplementoController from '../controllers/PessoaComplementeController';
import moment from 'moment';

class PessoaFisicaController {
    async store(req, res) {

        if (req.dt_nascimento === '' || req.dt_nascimento === undefined) {
            return ({ info: 'Data de nascimento não informada!' });
        }
        req.dt_nascimento = moment(req.dt_nascimento, "DD/MM/YYYY").format("YYYY-MM-DD");

        try {

            if (req.nome === '' || req.nome === undefined) {
                return ({ info: 'Nome não informado!' });
            }
            if (req.cpf === '' || req.cpf === undefined) {
                return ({ info: 'CPF não informado!' });
            }

            if (req.email === '' || req.email === undefined) {
                return ({ info: 'Email não informado!' });
            }

            const cpfExists = await PessoaFisica.findOne({ where: { cpf: req.cpf } });
            const rgExists = await PessoaFisica.findOne({ where: { rg: req.rg } });
            const emailExists = await PessoaComplemento.findOne({ where: { email: req.email } })

            if (cpfExists) {
                return ({
                    info: `CPF: ${cpfExists.dataValues.cpf} já está cadastrado!`
                });
            };

            if (rgExists) {
                return ({ info: `RG ${rgExists.dataValues.rg} já cadastrado!` });
            }

            if (emailExists) {
                return ({ info: `Email ${emailExists.dataValues.email} já cadastrado!` });
            }

            const pessoaCadastrada = await PessoaFisica.create(req);

            const cd_pessoa_fisica = pessoaCadastrada.dataValues.id;

            let completoPessoaJson = {
                cd_pessoa_fisica: cd_pessoa_fisica,
                telefone: req.body.telefone,
                ramal: req.body.ramal,
                email: req.body.email,
                cep: req.body.cep,
                rua: req.body.rua,
                complemento: req.body.complemento,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                uf: req.body.uf,
                pais: req.body.pais,
            }

            const result = await PessoaComplementoController.store(completoPessoaJson);

            if (result) {
                return cd_pessoa_fisica;
            } else {
                return ({ msg: 'Houve um erro no cadastrado' });
            }

        } catch (error) {
            console.log(error);
            return ({ error: 'Não foi possível criar a Pessoa' });
        }
    }

    async index(req, res) {
        const pessoas = await PessoaFisica.findAll({
            attributes: ['nome', 'cpf', 'dt_nascimento', 'cd_pessoa_fisica'],
            include: [
                {
                    model: PessoaComplemento,
                    attributes: ['telefone', 'email', 'cep']
                },
            ],
        });

        return res.json({ pessoas });
    }
}

export default new PessoaFisicaController;