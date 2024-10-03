const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const PermissoesDoUsuario = sequelize.define('PermissoesDoUsuario', {
  id_permissoes: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuarios', 
      key: 'id_usuario',
    },
    onDelete: 'CASCADE', 
  },
  role: {
    type: DataTypes.ENUM('cliente', 'triagem', 'admin', 'especialista'),
    allowNull: false,
  },
  permissions: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  },
}, {
  tableName: 'Permissoes_do_usuario',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = PermissoesDoUsuario;
