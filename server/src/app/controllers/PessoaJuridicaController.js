import PessoaJuridica from '../models/PessoaJuridica';
import PessoaComplemento from '../models/PessoaComplemento';
import PessoaComplementoController from '../controllers/PessoaComplementeController';
import moment from 'moment';

class PessoaJuridicaController {
    async store(req, res) {
        if (req.dt_criacao_cnpj) {
            req.dt_criacao_cnpj = moment(req.dt_criacao_cnpj, "DD/MM/YYYY").format("YYYY-MM-DD");
        }

        try {

            if (req.razao_social === '' || req.razao_social === undefined) {
                return ({ info: 'Razão Social não informado!' });
            }

            if (req.cnpj === '' || req.cnpj === undefined) {
                return ({ info: 'CNPJ não informado!' });
            }

            if (req.email === '' || req.email === undefined) {
                return ({ info: 'Email não informado!' });
            }

            const cnpjExists = await PessoaJuridica.findOne({ where: { cnpj: req.cnpj } });
            const emailExists = await PessoaComplemento.findOne({ where: { email: req.email } })

            if (cnpjExists) {
                return ({ info: `CNPJ ${cnpjExists.dataValues.cnpj} já está cadastrado!` });
            }

            if (emailExists) {
                return ({ info: `Email ${emailExists.dataValues.email} já cadastrado!` });
            }

            const pessoaCadastrada = await PessoaJuridica.create(req);
            const cd_pessoa_juridica = pessoaCadastrada.dataValues.id;

            let completoPessoaJson = {
                cd_pessoa_juridica: cd_pessoa_juridica,
                telefone: req.telefone,
                ramal: req.ramal,
                email: req.email,
                cep: req.cep,
                rua: req.rua,
                complemento: req.complemento,
                bairro: req.bairro,
                cidade: req.cidade,
                uf: req.uf,
                pais: req.pais,
            }

            const result = await PessoaComplementoController.store(completoPessoaJson);

            if (result) {
                return cd_pessoa_juridica;
            } else {
                return ({ info: 'Houve um erro no cadastrado' });
            }

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Não foi possível criar a Pessoa' });
        }
    }
}

export default new PessoaJuridicaController;