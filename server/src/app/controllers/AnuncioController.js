import Anuncio from '../models/Anuncio';

class AnuncioController {
    async store(req, res) {

        try {
            console.log(req.body);
            await Anuncio.create(req.body);

            return res.status(200).json({ msg: 'Anúncio Inserido com sucesso'} );

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Não foi possível criar o anúncio'});
        }
    }
}

export default new AnuncioController;