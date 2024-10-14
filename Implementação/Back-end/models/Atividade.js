const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Atividade = sequelize.define('Atividade', {
    
    id_atividade: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        autoIncrement: true,
        primaryKey: true,
    },
    
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    prioridade: {
        type: DataTypes.STRING(20),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    data_inicio: {
        type: DataTypes.DATE,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    data_fim: {
        type: DataTypes.DATE,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    status: {
        type: DataTypes.STRING(20),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    responsavel: {
        type: DataTypes.STRING(100),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    id_cronograma: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'atividade', 
    timestamps: false
});

module.exports = Atividade;