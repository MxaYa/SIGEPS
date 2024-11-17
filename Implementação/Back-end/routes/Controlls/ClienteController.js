const express = require('express');
const router = express.Router();
const clienteController = require('../Routes/routerCadCliente');

router.post('/criaCliente', clienteController.criaCliente);
router.get('/buscaCliente', clienteController.buscaCliente);
router.get('/buscaClienteID/:id', clienteController.buscaClienteID);
router.put('/atualizaClienteID/:id', clienteController.atualizaClienteID);
router.delete('/deletaClienteID/:id', clienteController.deletaClienteID);

module.exports = router;
