/* const express = require('express');
const router = express.Router();
const triagemController = require('./RoutesCadastros/routerCadTriagem');
const AdministradorController = require('./RoutesCadastros/routerCadAdministrador');
const EspecialistaController = require('./RoutesCadastros/routerCadEspecialista');
const ClienteController = require('./RoutesCadastros/routerCadCliente');

// ----------------Triagem---------------------
router.post('/', triagemController.criaTriagem);
router.get('/', triagemController.buscaTriagem);
router.get('/:id', triagemController.buscaTriagemID);
router.put('/:id', triagemController.atualizaTriagemID);
router.delete('/:id', triagemController.deletaTriagemID);

// ----------------Adm---------------------
router.post('/', AdministradorController.criaAdm);
router.get('/', AdministradorController.buscaAdm);
router.get('/:id', AdministradorController.buscaAdmID);
router.put('/:id', AdministradorController.atualizaAdmID);
router.delete('/:id', AdministradorController.deletaAdmID);

// ----------------Especialista---------------------
router.post('/', EspecialistaController.criaEspecialista);
router.get('/', EspecialistaController.buscaEspecialista);
router.get('/:id', EspecialistaController.buscaEspecialistaID);
router.put('/:id', EspecialistaController.atualizaEspecialistaID);
router.delete('/:id', EspecialistaController.deletaEspecialistaID);

// ----------------Cliente---------------------
router.post('/', ClienteController.criaCliente);
router.get('/', ClienteController.buscaCliente);
router.get('/:id', ClienteController.buscaClienteID);
router.put('/:id', ClienteController.atualizaClienteID);
router.delete('/:id', ClienteController.deletaClienteID);

module.exports = router;
 */