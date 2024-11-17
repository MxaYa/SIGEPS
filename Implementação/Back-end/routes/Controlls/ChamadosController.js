const express = require('express');
const router = express.Router();
const ChamadosController = require('../Routes/routerChamados');
const tipoManutencaoContoller = require('../Routes/routerTipoManutencao');
const sistemasController = require('../Routes/routerSistemas');
const StatusChamadoController = require('../Routes/routerStatuschamado')

router.post('/chamados', ChamadosController.criarChamado);
router.get('/chamados', ChamadosController.getChamados);
router.get('/chamados/:id', ChamadosController.getChamadoById);
router.put('/chamados/:id/status', ChamadosController.atualizarStatusChamado);
router.get('/tipos-manutencao', tipoManutencaoContoller.getTiposManutencao);
router.get('/sistemas', sistemasController.getSistemas);
router.get('/status-chamado', StatusChamadoController.getStatusChamado);
router.delete('/chamados/:id', ChamadosController.deleteChamado);


module.exports = router;
