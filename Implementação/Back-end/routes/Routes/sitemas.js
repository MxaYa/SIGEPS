// routes/sistemas.js
const express = require('express');
const router = express.Router();
const Sistemas  = require('../../models/Sistemas'); // Importa o modelo Sistemas
const Tipo_Sistema  = require('../../models/Tipo_Sistema'); // Importa o modelo Tipo_Sistema

// Rota para obter todos os tipos de sistema
router.get('/tipossistema', async (req, res) => {
    try {
      const tiposSistema = await Tipo_Sistema.findAll(); // Consulta todos os tipos de sistema
  
      // Mapear os dados para um formato simples (JSON) antes de enviar
      const tiposSistemaResponse = tiposSistema.map(tipo => tipo.get()); 
  
      // Enviar a resposta como um array simples de objetos
      res.json(tiposSistemaResponse);
    } catch (error) {
      console.error('Erro ao buscar tipos de sistema:', error);
      res.status(500).json({ error: 'Erro ao buscar tipos de sistema' });
    }
  });
  

// Rota para criar um novo sistema
router.post('/', async (req, res) => {
    const { nomeSistema, codigoTipo_Sistema } = req.body;

    // Verificar se os dados são válidos
    if (!nomeSistema || !codigoTipo_Sistema) {
        return res.status(400).json({ error: 'Nome do sistema e tipo de sistema são obrigatórios' });
    }

    try {
        // Criando o novo sistema no banco de dados
        const sistema = await Sistemas.create({
            nomeSistema,
            codigoTipo_Sistema
        });

        res.status(201).json({
            message: 'Sistema criado com sucesso',
            sistemaId: sistema.codigoSistema // Retorna o ID do sistema criado
        });
    } catch (error) {
        console.error('Erro ao criar sistema:', error);
        res.status(500).json({ error: 'Erro ao criar sistema' });
    }
});

module.exports = router;
