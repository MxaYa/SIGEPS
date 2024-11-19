const Chamados = require('../../models/Chamados');
const EspecialistaChamado = require('../../models/Especialista_Chamado');

exports.criaEspecialistaChamado = async (req, res) => {
  try {
    const { codigoEspecialista, numeroChamado } = req.body;

    if (!codigoEspecialista || !numeroChamado) {
      return res.status(400).json({ error: 'Campos obrigatórios não fornecidos.' });
    }

    const especialistaChamado = await EspecialistaChamado.create({
      codigoEspecialista,
      numeroChamado,
    });

    res.status(201).json(especialistaChamado);
  } catch (error) {
    console.error('Erro ao criar associação Especialista_Chamado:', error);
    res.status(500).json({ error: 'Erro ao criar associação Especialista_Chamado.' });
  }
};

exports.deletaEspecialistaChamado = async (req, res) => {
    try {
      const { codigoEspecialista, numeroChamado } = req.params;
  
      if (!codigoEspecialista || !numeroChamado) {
        return res.status(400).json({ error: 'Os parâmetros obrigatórios não foram fornecidos.' });
      }
  
      const registro = await EspecialistaChamado.findOne({
        where: {
          codigoEspecialista,
          numeroChamado,
        },
      });
  
      if (!registro) {
        return res.status(404).json({ error: 'Registro não encontrado.' });
      }

      await registro.destroy();
  
      res.status(200).json({ message: 'Registro deletado com sucesso.' });
    } catch (error) {
      console.error('Erro ao deletar associação Especialista_Chamado:', error);
      res.status(500).json({ error: 'Erro ao deletar associação Especialista_Chamado.' });
    }
  };


  exports.buscarChamadosPorEspecialista = async (req, res) => {
    try {
      const { codigoEspecialista } = req.params;
      console.log('codigoEspecialista:', codigoEspecialista);
      const chamados = await EspecialistaChamado.findAll({
        where: { codigoEspecialista: codigoEspecialista },
        include: {
          model: Chamados,
          attributes: ['numeroChamado', 'tituloChamado', 'descricaoChamado', 'codigoStatus_Chamado', 'codigoCliente', 'codigoTriagem', 'codigoSistema', 'dataAbertura', 'dataFechamento','codigoTipo_Manutencao'],
        },
      });
      if (chamados.length === 0) {
        return res.status(404).json({ message: 'Nenhum chamado localizado ao especialista.' });
      }
      res.status(200).json(chamados.map((relacao) => relacao.Chamado));
    } catch (error) {
      console.error('Erro ao buscar chamados por especialista:', error);
      res.status(500).json({ error: 'Erro ao buscar chamados por especialista.' });
    }
  };