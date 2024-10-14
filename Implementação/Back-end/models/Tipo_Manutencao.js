const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tipo_manutencao = sequelize.define('Tipo_manutencao', {
    
    codigoTipo_Manutencao: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    nomeTipo_Manutencao: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'Tipo_Manutencao', 
    timestamps: false
});

module.exports = Tipo_manutencao;