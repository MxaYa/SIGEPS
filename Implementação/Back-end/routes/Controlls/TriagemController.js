const express = require('express');
const router = express.Router();
const TriagemController = require("../RoutesCadastros/routerCadTriagem");

router.post('/triagem', TriagemController.criaTriagem);
router.get('/triagem', TriagemController.buscaTriagem);
router.get('/triagem/:id', TriagemController.buscaTriagemID);
router.put('/triagem/:id', TriagemController.atualizaTriagemID);
router.delete('/triagem/:id', TriagemController.deletaTriagemID);

module.exports = router;
