const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Especialistas = sequelize.define('Especialistas', {
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    codigoEspecialista: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: false, //Define se a coluna � null, retorna true ou false
        primaryKey: true, //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    nomeEspecialista: { //Nome da coluna
        type: DataTypes.STRING(100), //tipo de dados da coluna
        allowNull: false, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    emailEspecialista: { //Nome da coluna
        type: DataTypes.STRING(100), //tipo de dados da coluna
        allowNull: true, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    telefoneEspecialista: { //Nome da coluna
        type: DataTypes.STRING(20), //tipo de dados da coluna
        allowNull: true, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
    
},{
    tableName: 'Especialistas', 
    timestamps: false
});

module.exports = Especialistas;