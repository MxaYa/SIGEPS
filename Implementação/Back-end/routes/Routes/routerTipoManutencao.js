const TipoManutencao = require('../../models/Tipo_Manutencao');

exports.getTiposManutencao = async (req, res) => {
  try {
    const tiposManutencao = await TipoManutencao.findAll();  // Usar findAll para buscar todos
    res.status(200).json(tiposManutencao);
  } catch (error) {
    console.error('Erro ao buscar tipos de manutenção:', error);
    res.status(500).json({ error: 'Erro ao buscar tipos de manutenção.' });
  }
};
