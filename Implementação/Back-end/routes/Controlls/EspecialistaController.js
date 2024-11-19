const express = require('express');
const router = express.Router();
const EspecialistaController = require("../Routes/routerCadEspecialista");
const AssociacaoEspecialistaChamado = require('../Routes/routerAssEspecialista-Chamado')


router.post('/criaEspecialista', EspecialistaController.criaEspecialista);
router.get('/buscaEspecialista', EspecialistaController.buscaEspecialista);
router.get('/buscaEspecialistaID/:id', EspecialistaController.buscaEspecialistaID);
router.put('/atualizaEspecialistaID/:id', EspecialistaController.atualizaEspecialistaID);
router.delete('/deletaEspecialistaID/:id', EspecialistaController.deletaEspecialistaID);
router.post('/criaAssociacaoEspecialistaChamado/:codigoEspecialista/:numeroChamado', AssociacaoEspecialistaChamado.criaEspecialistaChamado);
router.delete('/deletaAssociacaoEspecialistaChamado/:codigoEspecialista/:numeroChamado', AssociacaoEspecialistaChamado.deletaEspecialistaChamado)
router.get('/chamados/:codigoEspecialista', AssociacaoEspecialistaChamado.buscarChamadosPorEspecialista);




module.exports = router;
