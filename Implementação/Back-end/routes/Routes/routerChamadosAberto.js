const Chamados = require('../../models/Chamados');
const Sistemas = require('../../models/Sistemas');
const TipoManutencao = require('../../models/Tipo_Manutencao');
const Clientes = require('../../models/Clientes');
const StatusChamado = require('../../models/Status_Chamado');
const Triagem = require('../../models/Triagem');

exports.getChamadosAbertos = async (req, res) => {
  try {
    const chamadosAbertos = await Chamados.findAll({
      where: {
        codigoStatus_Chamado: 1,
      },
      include: [
        { model: Sistemas, as: 'sistema' },
        { model: TipoManutencao, as: 'tipoManutencao' },
        { model: StatusChamado, as: 'statusChamado' },
        { model: Clientes, as: 'cliente' },
        { model: Triagem, as: 'triagem' },
      ],
    });

    if (chamadosAbertos.length === 0) {
      return res.status(404).json({ error: 'Nenhum chamado aberto encontrado.' });
    }

    res.status(200).json(chamadosAbertos);
  } catch (error) {
    console.error('Erro ao buscar chamados abertos:', error);
    res.status(500).json({ error: 'Erro ao buscar chamados abertos.' });
  }
};
