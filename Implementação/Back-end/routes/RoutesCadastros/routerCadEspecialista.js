const Especialista = require('../../models/Especialistas');

exports.criaEspecialista = async (req, res) => {
  try {
    const especialista = await Especialista.create(req.body);
    res.status(201).json(especialista);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar especialista.' });
  }
};

exports.buscaEspecialista = async (req, res) => {
  try {
    const especialistas = await Especialista.findAll();
    res.status(200).json(especialistas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar especialistas.' });
  }
};

exports.buscaEspecialistaID = async (req, res) => {
  try {
    const especialista = await Especialista.findByPk(req.params.id);
    if (!especialista) return res.status(404).json({ error: 'Especialista não encontrado.' });
    res.status(200).json(especialista);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar especialista.' });
  }
};

exports.atualizaEspecialistaID = async (req, res) => {
  try {
    const especialista = await Especialista.findByPk(req.params.id);
    if (!especialista) return res.status(404).json({ error: 'Especialista não encontrado.' });

    await especialista.update(req.body);
    res.status(200).json(especialista);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar especialista.' });
  }
};

exports.deletaEspecialistaID = async (req, res) => {
  try {
    const especialista = await Especialista.findByPk(req.params.id);
    if (!especialista) return res.status(404).json({ error: 'Especialista não encontrado.' });

    await especialista.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar especialista.' });
  }
};
