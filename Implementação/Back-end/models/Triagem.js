const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Triagem = sequelize.define('Triagem', {
    
    codigoTriagem: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        autoIncrement: true,
        primaryKey: true,
    },
    
    nomeTriagem: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    emailTriagem: {
        type: DataTypes.STRING(100),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    telefoneTriagem: {
        type: DataTypes.STRING(20),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    senhaTriagem: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    
},{
    tableName: 'Triagem', 
    timestamps: false
});

module.exports = Triagem;