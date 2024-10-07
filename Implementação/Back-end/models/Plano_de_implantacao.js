const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Plano_de_implantacao = sequelize.define('Plano_de_implantacao', {
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    id_plano: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: False, //Define se a coluna é null, retorna true ou false
        primaryKey: true, //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    nome: { //Nome da coluna
        type: DataTypes.VARCHAR(100), //tipo de dados da coluna
        allowNull: False, //Define se a coluna é null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column é a coleçao de objeto que representa a coluna do banco.
    descricao: { //Nome da coluna
        type: DataTypes.TEXT, //tipo de dados da coluna
        allowNull: False, //Define se a coluna é null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
    
},{
    tableName: 'plano_de_implantacao', 
    timestamps: false
});

module.exports = Plano_de_implantacao;