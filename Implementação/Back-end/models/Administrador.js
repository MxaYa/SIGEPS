const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Administrador = sequelize.define('Administrador', {
    
    codigoAdm: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
    },
    
    nomeAdm: {
        type: DataTypes.STRING(100),
        allowNull: false, 
        
    },
    
    emailAdm: {
        type: DataTypes.STRING(100),
        allowNull: true, 
        
    },
    
    telefoneAdm: {
        type: DataTypes.STRING(20),
        allowNull: true, 
        
    },
    senhaAdm: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    
},{
    tableName: 'Administrador', 
    timestamps: false
});

module.exports = Administrador;