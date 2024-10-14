const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tipo_sistema = sequelize.define('Tipo_sistema', {
    
    codigoTipo_Sistema: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        autoIncrement: true,
        primaryKey: true,
    },
    
    nomeTipo_Sistema: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'Tipo_Sistema', 
    timestamps: false
});

module.exports = Tipo_sistema;