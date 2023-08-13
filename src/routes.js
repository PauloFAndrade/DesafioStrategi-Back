const express = require('express');
const cadastroClientes = require('./controllers/clientes/cadastro');
const getClientes = require('./controllers/clientes/clientes');
const deleteCliente = require('./controllers/clientes/delete');
const editarCliente = require('./controllers/clientes/editar');
const checkCliente = require('./controllers/clientes/checkCliente');
const login = require('./controllers/corretores/login');
const cadastro = require('./controllers/corretores/cadastro')
const getImoveis = require('./controllers/imoveis/imoveis');
const cadastroDeVendas = require('./controllers/vendas/cadastro');
const tokenVerify = require('./middlewares/tokenVerify');
const reativarCliente = require('./controllers/clientes/reativarCliente');
const desativarImovel = require('./controllers/imoveis/desativarImovel');

const routes = express();

routes.post('/login', login);
routes.post('/cadastro', cadastro);

routes.get('/clientes',tokenVerify, getClientes);
routes.post('/cliente-cadastro', tokenVerify , cadastroClientes);
routes.post('/cliente-check', tokenVerify, checkCliente);
routes.put('/cliente-edicao',tokenVerify, editarCliente);
routes.delete('/clientes/:id',tokenVerify, deleteCliente);
routes.put('/cliente-reativar/:id', tokenVerify, reativarCliente);

routes.get('/imoveis', tokenVerify, getImoveis);
routes.delete('/imoveis/:id',tokenVerify,desativarImovel);

routes.post('/vendas-cadastro', tokenVerify, cadastroDeVendas);

module.exports = routes;