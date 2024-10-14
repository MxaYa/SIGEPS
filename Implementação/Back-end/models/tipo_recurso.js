const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tipo_recurso = sequelize.define('Tipo_recurso', {
    
    id_tipo_recurso: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        autoIncrement: true,
        primaryKey: true,
    },
    
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    tipo: {
        type: DataTypes.STRING(50),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    local: {
        type: DataTypes.STRING(100),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    requisitos_privacidade: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    requisitos_energia: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    modelo: {
        type: DataTypes.STRING(100),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    versao: {
        type: DataTypes.STRING(50),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    configuracoes: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    fabricante: {
        type: DataTypes.STRING(100),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    suporte_fabricante: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    licenca: {
        type: DataTypes.STRING(100),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'tipo_recurso', 
    timestamps: false
});

module.exports = Tipo_recurso;