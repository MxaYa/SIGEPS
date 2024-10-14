const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Status_chamado = sequelize.define('Status_chamado', {
    
    codigoStatus_Chamado: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        primaryKey: true,
    },
    
    nomeStatus_Chamado: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'Status_Chamado', 
    timestamps: false
});

module.exports = Status_chamado;