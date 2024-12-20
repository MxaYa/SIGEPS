const Administrador = require('../../models/Administrador');

exports.criaAdm = async  (req, res) => {
  try {
    console.log('Dados recebidos no backend:', req.body);
    const administrador = await Administrador.create(req.body);
    res.status(201).json(administrador);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar administrador.' });
  }
};

exports.buscaAdm = async (req, res) => {
  try {
    const administradores = await Administrador.findAll();
    res.status(200).json(administradores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar administradores.' });
  }
};

exports.buscaAdmID = async (req, res) => {
  try {
    const administrador = await Administrador.findByPk(req.params.id);
    if (!administrador) return res.status(404).json({ error: 'Administrador não encontrado.' });
    res.status(200).json(administrador);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar administrador.' });
  }
};

exports.atualizaAdmID = async (req, res) => {
  try {
    const administrador = await Administrador.findByPk(req.params.id);
    if (!administrador) return res.status(404).json({ error: 'Administrador não encontrado.' });

    await administrador.update(req.body);
    res.status(200).json(administrador);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar administrador.' });
  }
};

exports.deletaAdm = async (req, res) => {
    try {
      const administrador = await Administrador.findByPk(req.params.id);
      if (!administrador) return res.status(404).json({ error: 'Administrador não encontrado.' });
  
      await administrador.destroy();
      res.status(200).json({ message: 'Administrador deletado com sucesso.' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar administrador.' });
    }
  };