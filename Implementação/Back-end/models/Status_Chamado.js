const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Status_chamado = sequelize.define('Status_chamado', {
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    codigoStatus_Chamado: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: False, //Define se a coluna é null, retorna true ou false
        primaryKey: true, //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    nomeStatus_Chamado: { //Nome da coluna
        type: DataTypes.VARCHAR(100), //tipo de dados da coluna
        allowNull: False, //Define se a coluna é null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
    
},{
    tableName: 'Status_Chamado', 
    timestamps: false
});

module.exports = Status_chamado;