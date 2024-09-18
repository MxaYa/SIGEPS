const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sistemas = sequelize.define('Sistemas', {
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    codigoSistema: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: False, //Define se a coluna é null, retorna true ou false
        primaryKey: true, //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    nomeSistema: { //Nome da coluna
        type: DataTypes.VARCHAR(100), //tipo de dados da coluna
        allowNull: False, //Define se a coluna é null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    codigoTipo_Sistema: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: True, //Define se a coluna é null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
    
},{
    tableName: 'Sistemas', 
    timestamps: false
});

module.exports = Sistemas;