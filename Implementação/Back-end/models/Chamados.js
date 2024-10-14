const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Chamados = sequelize.define('Chamados', {
    
    numeroChamado: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        autoIncrement: true,
        primaryKey: true,
    },
    
    tituloChamado: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    descricaoChamado: {
        type: DataTypes.TEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    codigoStatus_Chamado: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    codigoCliente: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    codigoTriagem: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    codigoSistema: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    dataAbertura: {
        type: DataTypes.DATE,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    dataFechamento: {
        type: DataTypes.DATE,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    codigoTipo_Manutencao: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'Chamados', 
    timestamps: false
});

module.exports = Chamados;