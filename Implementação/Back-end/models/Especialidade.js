const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Especialidade = sequelize.define('Especialidade', {
    
    codigoEspecialidade: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    nomeEspecialidade: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'Especialidade', 
    timestamps: false
});

module.exports = Especialidade;