const express = require('express');
const router = express.Router();
const AdministradorController = require("../RoutesCadastros/routerCadAdministrador");

router.post('/criaAdm', AdministradorController.criaAdm);
router.get('/buscaAdm', AdministradorController.buscaAdm);
router.get('/buscaAdmID/:id', AdministradorController.buscaAdmID);
router.put('/atualizaAdmID/:id', AdministradorController.atualizaAdmID);
router.delete('/deletaAdm/:id', AdministradorController.deletaAdm);

module.exports = router;
