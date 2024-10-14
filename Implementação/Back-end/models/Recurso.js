const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Recurso = sequelize.define('Recurso', {
    
    id_recurso: {
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
    
    id_tipo_recurso: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'recurso', 
    timestamps: false
});

module.exports = Recurso;