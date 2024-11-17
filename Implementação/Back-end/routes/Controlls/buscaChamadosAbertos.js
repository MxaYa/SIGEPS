const express = require('express');
const router = express.Router();
const ChamadosController = require('../Routes/routerChamadosAberto');

router.get('/abertos', ChamadosController.getChamadosAbertos);

module.exports = router;
