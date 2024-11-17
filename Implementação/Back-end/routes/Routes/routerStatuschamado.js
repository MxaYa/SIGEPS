const StatusChamado = require('../../models/Status_Chamado');

exports.getStatusChamado = async (req, res) => {
  try {
    const statusChamados = await StatusChamado.findAll();  
    res.status(200).json(statusChamados);
  } catch (error) {
    console.error('Erro ao buscar status dos chamados:', error);
    res.status(500).json({ error: 'Erro ao buscar status dos chamados.' });
  }
};
