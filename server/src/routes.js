import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PessoaFisicaController from './app/controllers/PessoaFisicaController';
import PessoaJuridicaController from './app/controllers/PessoaJuridicaController';
import PessoaComplementoController from './app/controllers/PessoaComplementeController';
import UsuarioController from './app/controllers/UsuarioController';
import AnuncioController from './app/controllers/AnuncioController';
import ArquivoController from './app/controllers/ArquivoController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/pessoa_fisica', PessoaFisicaController.store);
routes.post('/pessoa_juridica', PessoaJuridicaController.store);
routes.post('/pessoa_complemento', PessoaComplementoController.store);
routes.post('/arquivo', ArquivoController.store);
routes.post('/anuncios', AnuncioController.store);
routes.post('/usuario', UsuarioController.store);

routes.get('/pessoas', PessoaFisicaController.index);
routes.get('/usuarios', UsuarioController.index);

routes.get('/users', (req, res) => {
    let msg = { msg: "hello word" }
    return res.status(200).json(msg);
});

routes.post('/files', upload.single('file'), ArquivoController.store);

export default routes;