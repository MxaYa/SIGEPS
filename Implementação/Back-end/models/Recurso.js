const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Recurso = sequelize.define('Recurso', {
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    id_recurso: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: False, //Define se a coluna � null, retorna true ou false
        primaryKey: true, //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    nome: { //Nome da coluna
        type: DataTypes.VARCHAR(100), //tipo de dados da coluna
        allowNull: False, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    tipo: { //Nome da coluna
        type: DataTypes.VARCHAR(50), //tipo de dados da coluna
        allowNull: False, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    id_tipo_recurso: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: True, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
    
},{
    tableName: 'recurso', 
    timestamps: false
});

module.exports = Recurso;