const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tipo_manutencao = sequelize.define('Tipo_manutencao', {
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    codigoTipo_Manutencao: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: False, //Define se a coluna é null, retorna true ou false
        primaryKey: true, //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    nomeTipo_Manutencao: { //Nome da coluna
        type: DataTypes.VARCHAR(100), //tipo de dados da coluna
        allowNull: False, //Define se a coluna é null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
    
},{
    tableName: 'Tipo_Manutencao', 
    timestamps: false
});

module.exports = Tipo_manutencao;