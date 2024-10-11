const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Clientes = sequelize.define('Clientes', {
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    codigoCliente: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: false, //Define se a coluna � null, retorna true ou false
        autoIncrement: true,
        primaryKey: true, //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    nomeCliente: { //Nome da coluna
        type: DataTypes.STRING(100), //tipo de dados da coluna
        allowNull: false, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    emailCliente: { //Nome da coluna
        type: DataTypes.STRING(100), //tipo de dados da coluna
        allowNull: true, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    telefoneCliente: { //Nome da coluna
        type: DataTypes.STRING(20), //tipo de dados da coluna
        allowNull: true, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    codigoSistema: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: true, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
    
},{
    tableName: 'Clientes', 
    timestamps: false
});

module.exports = Clientes;