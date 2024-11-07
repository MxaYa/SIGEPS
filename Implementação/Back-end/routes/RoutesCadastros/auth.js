const express = require('express');
const router = express.Router();
const { login } = require('../Controlls/authControll');

router.post('/login', login);

module.exports = router;
