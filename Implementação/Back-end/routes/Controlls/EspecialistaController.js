const express = require('express');
const router = express.Router();
const EspecialistaController = require("../RoutesCadastros/routerCadEspecialista");

router.post('/criaEspecialista', EspecialistaController.criaEspecialista);
router.get('/buscaEspecialista', EspecialistaController.buscaEspecialista);
router.get('/buscaEspecialistaID/:id', EspecialistaController.buscaEspecialistaID);
router.put('/atualizaEspecialistaID/:id', EspecialistaController.atualizaEspecialistaID);
router.delete('/deletaEspecialistaID/:id', EspecialistaController.deletaEspecialistaID);

module.exports = router;
