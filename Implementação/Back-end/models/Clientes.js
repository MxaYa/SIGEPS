const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Clientes = sequelize.define('Clientes', {
    
    codigoCliente: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        autoIncrement: true,
        primaryKey: true,
    },
    
    nomeCliente: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    emailCliente: {
        type: DataTypes.STRING(100),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    telefoneCliente: {
        type: DataTypes.STRING(20),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    codigoSistema: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'Clientes', 
    timestamps: false
});

module.exports = Clientes;