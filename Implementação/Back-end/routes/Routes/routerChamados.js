const { TipoManutencao, Sistemas, Chamados, StatusChamado, Clientes, Triagem } = require('../../models');

exports.criarChamado = async (req, res) => {
  try {
    const tipoManutencao = await TipoManutencao.findOne({
      where: { codigoTipo_Manutencao: req.body.codigoTipo_Manutencao }
    });

    const sistema = await Sistemas.findOne({
      where: { codigoSistema: req.body.codigoSistema }
    });

    if (!tipoManutencao || !sistema) {
      return res.status(400).json({ error: 'Código de tipo de manutenção ou sistema inválido.' });
    }

    // Criando
    const chamado = await Chamados.create({
      tituloChamado: req.body.tituloChamado,
      nomeStatus_Chamado: req.body.nomeStatus_Chamado,
      codigoStatus_Chamado: req.body.codigoStatus_Chamado,
      codigoCliente: req.body.codigoCliente,
      codigoTriagem: req.body.codigoTriagem,
      codigoSistema: req.body.codigoSistema,
      codigoTipo_Manutencao: req.body.codigoTipo_Manutencao,
      descricaoChamado: req.body.descricaoChamado, // Adicionado o campo descricaoChamado
      dataAbertura: new Date(),
    });

    chamado.nomeSistema = sistema.nomeSistema;
    chamado.nomeTipo_Manutencao = tipoManutencao.nomeTipo_Manutencao;

    res.status(201).json(chamado);
  } catch (error) {
    console.error('Erro ao criar chamado:', error);
    res.status(500).json({ error: 'Erro ao criar chamado.' });
  }
};

exports.getChamados = async (req, res) => {
  try {
    const chamados = await Chamados.findAll({
      include: [
        {
          model: Sistemas,
          as: 'sistema',
          attributes: ['nomeSistema'],
        },
        {
          model: TipoManutencao,
          as: 'tipoManutencao',
          attributes: ['nomeTipo_Manutencao'],
        },
        {
          model: StatusChamado,
          as: 'statusChamado',
          attributes: ['nomeStatus_Chamado'],
        },
        {
          model: Clientes,
          as: 'cliente',
          attributes: ['nomeCliente'],
        },
        {
          model: Triagem,
          as: 'triagem',
          attributes: ['nomeTriagem'],  // Alterado para nomeTriagem
        },
      ],
    });

    if (!chamados || chamados.length === 0) {
      return res.status(404).json({ error: 'Nenhum chamado encontrado.' });
    }

    // Formatação
    const chamadosComDetalhes = chamados.map((chamado) => ({
      numeroChamado: chamado.numeroChamado,
      tituloChamado: chamado.tituloChamado,
      nomeStatus_Chamado: chamado.nomeStatus_Chamado,
      codigoStatus_Chamado: chamado.codigoStatus_Chamado,
      codigoCliente: chamado.codigoCliente,
      codigoTriagem: chamado.codigoTriagem,
      codigoSistema: chamado.codigoSistema,
      descricaoChamado: chamado.descricaoChamado,  // Incluído descricaoChamado
      dataAbertura: chamado.dataAbertura,
      dataFechamento: chamado.dataFechamento,
      codigoTipo_Manutencao: chamado.codigoTipo_Manutencao,
      nomeSistema: chamado.sistema ? chamado.sistema.nomeSistema : null,
      nomeTipo_Manutencao: chamado.tipoManutencao ? chamado.tipoManutencao.nomeTipo_Manutencao : null,
      nomeStatus_Chamado: chamado.statusChamado ? chamado.nomeStatus_Chamado : null,
      nomeCliente: chamado.cliente ? chamado.cliente.nomeCliente : null,
      nomeTriagem: chamado.triagem ? chamado.triagem.nomeTriagem : null,  // Alterado para nomeTriagem
    }));

    res.status(200).json(chamadosComDetalhes);
  } catch (error) {
    console.error('Erro ao buscar chamados:', error);
    res.status(500).json({ error: 'Erro ao buscar chamados.' });
  }
};

exports.getChamadoById = async (req, res) => {
  try {
    const { id } = req.params;

    const chamado = await Chamados.findOne({
      where: { numeroChamado: id },
      include: [
        {
          model: Sistemas,
          as: 'sistema',
          attributes: ['nomeSistema'],
        },
        {
          model: TipoManutencao,
          as: 'tipoManutencao',
          attributes: ['nomeTipo_Manutencao'],
        },
        {
          model: StatusChamado,
          as: 'statusChamado',
          attributes: ['nomeStatus_Chamado'],
        },
        {
          model: Clientes,
          as: 'cliente',
          attributes: ['nomeCliente'],
        },
        {
          model: Triagem,
          as: 'triagem',
          attributes: ['nomeTriagem'],  // Alterado para nomeTriagem
        },
      ],
    });

    if (!chamado) {
      return res.status(404).json({ error: 'Chamado não encontrado.' });
    }

    // Formatação
    const chamadoComDetalhes = {
      numeroChamado: chamado.numeroChamado,
      tituloChamado: chamado.tituloChamado,
      nomeStatus_Chamado: chamado.nomeStatus_Chamado,
      codigoStatus_Chamado: chamado.codigoStatus_Chamado,
      codigoCliente: chamado.codigoCliente,
      codigoTriagem: chamado.codigoTriagem,
      codigoSistema: chamado.codigoSistema,
      descricaoChamado: chamado.descricaoChamado,
      dataAbertura: chamado.dataAbertura,
      dataFechamento: chamado.dataFechamento,
      codigoTipo_Manutencao: chamado.codigoTipo_Manutencao,
      nomeSistema: chamado.sistema ? chamado.sistema.nomeSistema : null,
      nomeTipo_Manutencao: chamado.tipoManutencao ? chamado.tipoManutencao.nomeTipo_Manutencao : null,
      nomeStatus_Chamado: chamado.statusChamado ? chamado.nomeStatus_Chamado : null,
      nomeCliente: chamado.cliente ? chamado.cliente.nomeCliente : null,
      nomeTriagem: chamado.triagem ? chamado.triagem.nomeTriagem : null,
    };

    res.status(200).json(chamadoComDetalhes);
  } catch (error) {
    console.error('Erro ao buscar chamado por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar chamado.' });
  }
};

exports.atualizarStatusChamado = async (req, res) => {
  try {
    const { id } = req.params;
    const { codigoStatus_Chamado } = req.body;

    const statusChamado = await StatusChamado.findOne({
      where: { codigoStatus_Chamado }
    });

    if (!statusChamado) {
      return res.status(400).json({ error: 'Código de status inválido.' });
    }

    const chamado = await Chamados.update(
      { codigoStatus_Chamado },
      { where: { numeroChamado: id } }
    );

    if (chamado[0] === 0) {
      return res.status(404).json({ error: 'Chamado não encontrado ou não alterado.' });
    }

    res.status(200).json({ message: 'Status do chamado atualizado com sucesso.' });
  } catch (error) {
    console.error('Erro ao atualizar status do chamado:', error);
    res.status(500).json({ error: 'Erro ao atualizar status do chamado.' });
  }
};

exports.deleteChamado = async (req, res) => {
  try {
    const { id } = req.params;
    const chamado = await Chamados.findByPk(id);

    if (!chamado) {
      return res.status(404).json({ error: 'Chamado não encontrado.' });
    }

    await chamado.destroy();
    res.status(200).json({ message: 'Chamado excluído com sucesso.' });
  } catch (error) {
    console.error('Erro ao excluir chamado:', error);
    res.status(500).json({ error: 'Erro ao excluir chamado.' });
  }
};






