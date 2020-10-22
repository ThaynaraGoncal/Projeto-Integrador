import PessoaComplemento from '../models/PessoaComplemento';

class PessoaComplementoController {
    async store(req, res) {
        try {

            const cadastrado = await PessoaComplemento.create(req);

            if (cadastrado.dataValues.id) {
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Não foi possível criar a Pessoa' });
        }
    }
}

export default new PessoaComplementoController;