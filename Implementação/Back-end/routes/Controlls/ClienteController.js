const clienteController = require("../RoutesCadastros/routerCadCliente");

router.post('/cliente', clienteController.criaCliente);
router.get('/cliente', clienteController.buscaCliente);
router.get('/cliente/:id', clienteController.buscaClienteID);
router.put('/cliente/:id', clienteController.atualizaClienteID);
router.delete('/cliente/:id', clienteController.deletaClienteID);

module.exports = router;
