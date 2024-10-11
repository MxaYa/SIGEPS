const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Triagem = sequelize.define('Triagem', {
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    codigoTriagem: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: false, //Define se a coluna � null, retorna true ou false
        primaryKey: true, //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    nomeTriagem: { //Nome da coluna
        type: DataTypes.STRING(100), //tipo de dados da coluna
        allowNull: false, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    emailTriagem: { //Nome da coluna
        type: DataTypes.STRING(100), //tipo de dados da coluna
        allowNull: true, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    telefoneTriagem: { //Nome da coluna
        type: DataTypes.STRING(20), //tipo de dados da coluna
        allowNull: true, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
    
},{
    tableName: 'Triagem', 
    timestamps: false
});

module.exports = Triagem;