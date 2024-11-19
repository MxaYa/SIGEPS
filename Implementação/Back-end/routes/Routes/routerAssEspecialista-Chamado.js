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
  