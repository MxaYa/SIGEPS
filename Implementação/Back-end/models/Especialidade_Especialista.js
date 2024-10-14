const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Especialidade_especialista = sequelize.define('Especialidade_especialista', {
    
    codigoEspecialidade: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    codigoEspecialista: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
},{
    tableName: 'Especialidade_Especialista', 
    timestamps: false
});

module.exports = Especialidade_especialista;