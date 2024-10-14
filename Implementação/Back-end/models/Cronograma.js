const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cronograma = sequelize.define('Cronograma', {
    
    id_cronograma: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        autoIncrement: true,
        primaryKey: true,
    },
    
    nome_atividade: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    nome_material_suporte: {
        type: DataTypes.STRING(100),
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    data_inicio: {
        type: DataTypes.DATE,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    data_terminio: {
        type: DataTypes.DATE,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'cronograma', 
    timestamps: false
});

module.exports = Cronograma;