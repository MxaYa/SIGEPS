const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Especialistas = sequelize.define('Especialistas', {
    
    codigoEspecialista: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        autoIncrement: true,
        primaryKey: true,
    },
    
    nomeEspecialista: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    emailEspecialista: {
        type: DataTypes.STRING(100),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    telefoneEspecialista: {
        type: DataTypes.STRING(20),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'Especialistas', 
    timestamps: false
});

module.exports = Especialistas;