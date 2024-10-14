const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Especialista_chamado = sequelize.define('Especialista_chamado', {
    
    codigoEspecialista: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    numeroChamado: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
},{
    tableName: 'Especialista_Chamado', 
    timestamps: false
});

module.exports = Especialista_chamado;