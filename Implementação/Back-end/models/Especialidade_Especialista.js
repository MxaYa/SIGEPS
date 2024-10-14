const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Especialidade_especialista = sequelize.define('Especialidade_especialista', {
    
    codigoEspecialidade: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
    codigoEspecialista: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string minúscula
        primaryKey: true,
    },
    
},{
    tableName: 'Especialidade_Especialista', 
    timestamps: false
});

module.exports = Especialidade_especialista;