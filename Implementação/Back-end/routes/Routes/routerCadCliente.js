const Cliente = require('../../models/Clientes');

exports.criaCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    console.error('erro ao criar cliente', error);
    res.status(500).json({ error: 'Erro ao criar cliente.' });
  }
};

exports.buscaCliente = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes.' });
  }
};

exports.buscaClienteID = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado.' });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cliente.' });
  }
};

exports.atualizaClienteID = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado.' });

    await cliente.update(req.body);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar cliente.' });
  }
};

exports.deletaClienteID = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado.' });

    await cliente.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar cliente.' });
  }
};
