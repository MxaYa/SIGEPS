const express = require('express');
const router = express.Router();
const EspecialistaController = require("../RoutesCadastros/routerCadEspecialista");

router.post('/especialista', EspecialistaController.criaEspecialista);
router.get('/especialista', EspecialistaController.buscaEspecialista);
router.get('/especialista/:id', EspecialistaController.buscaEspecialistaID);
router.put('/especialista/:id', EspecialistaController.atualizaEspecialistaID);
router.delete('/especialista/:id', EspecialistaController.deletaEspecialistaID);

module.exports = router;
