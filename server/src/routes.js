import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PessoaFisicaController from './app/controllers/PessoaFisicaController';
import PessoaJuridicaController from './app/controllers/PessoaJuridicaController';
import PessoaComplementoController from './app/controllers/PessoaComplementeController';
import UsuariosController from './app/controllers/UsuarioController';
import UsuarioController from './app/controllers/UsuarioController';
import AnuncioController from './app/controllers/AnuncioController';
import ArquivoController from './app/controllers/ArquivoController';
import AvaliacaoController from './app/controllers/AvaliacaoController';

const routes = new Router();
const upload = multer(multerConfig);

//routes.get('/pessoas', PessoaFisicaController.index);
routes.post('/pessoa_fisica', PessoaFisicaController.store);
routes.post('/pessoa_juridica', PessoaJuridicaController.store);
routes.post('/pessoa_complemento', PessoaComplementoController.store);
routes.post('/arquivo', ArquivoController.store);

//routes.get('/usuarios', UsuariosController.index);
routes.get('/usuario', UsuarioController.user);
routes.post('/usuario', UsuarioController.store);
routes.put('/usuario', UsuarioController.userUpdate)

routes.get('/anuncios', AnuncioController.index);
routes.get('/anuncio_prestador', AnuncioController.indexPrestador);
routes.get('/anuncio', AnuncioController.indexFiltro);
routes.delete('/anuncio', AnuncioController.deleteAnuncio);
routes.post('/anuncios', upload.array('file'), AnuncioController.store);

routes.post('/avaliar', AvaliacaoController.store);
routes.get('/avaliacao', AvaliacaoController.index);

routes.post('/arquivos', upload.single('file'), ArquivoController.store);

export default routes;