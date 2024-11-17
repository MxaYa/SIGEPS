const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Sistemas = require('./Sistemas');
const TipoManutencao = require('./Tipo_Manutencao');
const Clientes = require('./Clientes');
const StatusChamado = require('./Status_Chamado');
const Triagem = require('./Triagem');

const Chamados = sequelize.define(
  'Chamados',
  {
    numeroChamado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tituloChamado: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descricaoChamado: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    codigoStatus_Chamado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Status_Chamado',
        key: 'codigoStatus_Chamado',
      },
    },
    codigoCliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Clientes',
        key: 'codigoCliente',
      },
    },
    codigoTriagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Triagem',
        key: 'codigoTriagem',
      },
    },
    codigoSistema: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Sistemas',
        key: 'codigoSistema',
      },
    },
    dataAbertura: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dataFechamento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    codigoTipo_Manutencao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tipo_Manutencao',
        key: 'codigoTipoManutencao',
      },
    },
  },
  {
    tableName: 'Chamados',
    timestamps: false,
  }
);

Chamados.belongsTo(Sistemas, { foreignKey: 'codigoSistema' });
Chamados.belongsTo(TipoManutencao, { foreignKey: 'codigoTipo_Manutencao' });
Chamados.belongsTo(Clientes, { foreignKey: 'codigoCliente' });
Chamados.belongsTo(StatusChamado, { foreignKey: 'codigoStatus_Chamado', targetKey: 'codigoStatus_Chamado' }); // Certifique-se de que é o nome correto
Chamados.belongsTo(Triagem, { foreignKey: 'codigoTriagem' });

module.exports = Chamados;
