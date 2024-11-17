const Chamados = require('./Chamados');
const Administrador = require('./Administrador');
const Especialistas = require('./Especialistas');
const Sistemas = require('./Sistemas');
const TipoManutencao = require('./Tipo_Manutencao');
const StatusChamado = require('./Status_Chamado');
const Clientes = require('./Clientes');
const Triagem = require('./Triagem');

Sistemas.hasMany(Chamados, { foreignKey: 'codigoSistema', as: 'chamados' });
Chamados.belongsTo(Sistemas, { foreignKey: 'codigoSistema', as: 'sistema' });

TipoManutencao.hasMany(Chamados, { foreignKey: 'codigoTipo_Manutencao', as: 'chamados' });
Chamados.belongsTo(TipoManutencao, { foreignKey: 'codigoTipo_Manutencao', as: 'tipoManutencao' });

StatusChamado.hasMany(Chamados, { foreignKey: 'codigoStatus_Chamado', as: 'chamados' });
Chamados.belongsTo(StatusChamado, { foreignKey: 'codigoStatus_Chamado', as: 'statusChamado' });

Clientes.hasMany(Chamados, { foreignKey: 'codigoCliente', as: 'chamados' });
Chamados.belongsTo(Clientes, { foreignKey: 'codigoCliente', as: 'cliente' });

Triagem.hasMany(Chamados, { foreignKey: 'codigoTriagem', as: 'chamados' });
Chamados.belongsTo(Triagem, { foreignKey: 'codigoTriagem', as: 'triagem' });

module.exports = { Chamados, Sistemas, TipoManutencao, StatusChamado, Clientes, Triagem, Especialistas, Administrador };
