const Triagem = require('../../models/Triagem');

exports.criaTriagem = async (req, res) => {
  try {
    const triagem = await Triagem.create(req.body);
    res.status(201).json(triagem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar operador de triagem.' });
  }
};

exports.buscaTriagem = async (req, res) => {
  try {
    const triagens = await Triagem.findAll();
    res.status(200).json(triagens);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar operadores de triagem.' });
  }
};


exports.buscaTriagemID = async (req, res) => {
  try {
    const triagem = await Triagem.findByPk(req.params.id);
    if (!triagem) return res.status(404).json({ error: 'Operador de triagem não encontrado.' });
    res.status(200).json(triagem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar operador de triagem.' });
  }
};

exports.atualizaTriagemID = async (req, res) => {
  try {
    const triagem = await Triagem.findByPk(req.params.id);
    if (!triagem) return res.status(404).json({ error: 'Operador de triagem não encontrado.' });

    await triagem.update(req.body);
    res.status(200).json(triagem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar operador de triagem.' });
  }
};

exports.deletaTriagemID = async (req, res) => {
  try {
    const triagem = await Triagem.findByPk(req.params.id);
    if (!triagem) return res.status(404).json({ error: 'Operador de triagem não encontrado.' });

    await triagem.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar operador de triagem.' });
  }
};
