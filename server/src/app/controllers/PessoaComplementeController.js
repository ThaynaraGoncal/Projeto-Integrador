import PessoaComplemento from '../models/PessoaComplemento';

class PessoaComplementoController {
    async store(req, res) {
        try {

            console.log(req)

            const cadastrado = await PessoaComplemento.create(req);

            //console.log(cadastrado)
            if (cadastrado) {
                return true
            } else {
                return false;
            }


        } catch (error) {
            console.log(error);
        }
    }
}

export default new PessoaComplementoController;