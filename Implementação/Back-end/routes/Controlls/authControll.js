const { Administrador, Clientes, Especialistas, Triagem } = require('../../models/index');

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    let user = await Administrador.findOne({ where: { emailAdm: email, senhaAdm: senha } });
    if (!user) {
      user = await Clientes.findOne({ where: { emailCliente: email, senhaCliente: senha } });
    }
    if (!user) {
      user = await Especialistas.findOne({ where: { emailEspecialista: email, senhaEspecialista: senha } });
    }
    if (!user) {
      user = await Triagem.findOne({ where: { emailTriagem: email, senhaTriagem: senha } });
    }

    if (user) {
      const role = user.constructor.name.toLowerCase();

      let codigo = null;
      if (role === 'clientes') {
        codigo = user.codigoCliente;
      } else if (role === 'especialistas') {
        codigo = user.codigoEspecialista;
      } else if (role === 'triagem') {
        codigo = user.codigoTriagem;
      }

      return res.status(200).json({ 
        message: "Login bem-sucedido", 
        role, 
        codigo,
      });
    }

    return res.status(400).json({ message: "Credenciais inválidas" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { login };

