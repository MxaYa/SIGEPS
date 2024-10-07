const express = require('express');
const router = express.Router();
const AdministradorController = require("../RoutesCadastros/routerCadAdministrador");

router.post('/adm', AdministradorController.criaAdm);
router.get('/adm', AdministradorController.buscaAdm);
router.get('/adm/:id', AdministradorController.buscaAdmID);
router.put('/adm/:id', AdministradorController.atualizaAdmID);
router.delete('/adm/:id', AdministradorController.deletaAdm);

module.exports = router;
