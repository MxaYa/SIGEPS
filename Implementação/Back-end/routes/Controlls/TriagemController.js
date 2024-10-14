const express = require('express');
const router = express.Router();
const TriagemController = require("../RoutesCadastros/routerCadTriagem");

router.post('/criaTriagem', TriagemController.criaTriagem);
router.get('/buscaTriagem', TriagemController.buscaTriagem);
router.get('/buscaTriagemID/:id', TriagemController.buscaTriagemID);
router.put('/atualizaTriagemID/:id', TriagemController.atualizaTriagemID);
router.delete('/deletaTriagemID/:id', TriagemController.deletaTriagemID);

module.exports = router;
