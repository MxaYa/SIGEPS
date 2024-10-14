const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sistemas = sequelize.define('Sistemas', {
    
    codigoSistema: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        autoIncrement: true,
        primaryKey: true,
    },
    
    nomeSistema: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    codigoTipo_Sistema: {
        type: DataTypes.INTEGER,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'Sistemas', 
    timestamps: false
});

module.exports = Sistemas;