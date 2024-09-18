const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Especialista_chamado = sequelize.define('Especialista_chamado', {
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    codigoEspecialista: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: False, //Define se a coluna é null, retorna true ou false
        primaryKey: true, //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    numeroChamado: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: False, //Define se a coluna é null, retorna true ou false
        primaryKey: true, //Adiciona pk se a coluna tiver chave primaria
    },
    
},{
    tableName: 'Especialista_Chamado', 
    timestamps: false
});

module.exports = Especialista_chamado;