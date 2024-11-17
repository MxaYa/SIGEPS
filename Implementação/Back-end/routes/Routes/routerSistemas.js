const Sistemas = require('../../models/Sistemas');

exports.getSistemas = async (req, res) => {
  try {
    const sistemas = await Sistemas.findAll();  // Usar findAll para buscar todos
    res.status(200).json(sistemas);
  } catch (error) {
    console.error('Erro ao buscar sistemas:', error);
    res.status(500).json({ error: 'Erro ao buscar sistemas.' });
  }
};
