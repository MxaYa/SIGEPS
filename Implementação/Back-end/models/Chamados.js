const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Chamados = sequelize.define('Chamados', {
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    numeroChamado: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: False, //Define se a coluna � null, retorna true ou false
        primaryKey: true, //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    tituloChamado: { //Nome da coluna
        type: DataTypes.VARCHAR(100), //tipo de dados da coluna
        allowNull: False, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    descricaoChamado: { //Nome da coluna
        type: DataTypes.TEXT, //tipo de dados da coluna
        allowNull: True, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    codigoStatus_Chamado: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: True, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    codigoCliente: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: True, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    codigoTriagem: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: True, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    codigoSistema: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: True, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    dataAbertura: { //Nome da coluna
        type: DataTypes.DATE, //tipo de dados da coluna
        allowNull: True, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    dataFechamento: { //Nome da coluna
        type: DataTypes.DATE, //tipo de dados da coluna
        allowNull: True, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
     //columns lista todas as tabelas do banco. column � a cole�ao de objeto que representa a coluna do banco.
    codigoTipo_Manutencao: { //Nome da coluna
        type: DataTypes.INTEGER, //tipo de dados da coluna
        allowNull: True, //Define se a coluna � null, retorna true ou false
         //Adiciona pk se a coluna tiver chave primaria
    },
    
},{
    tableName: 'Chamados', 
    timestamps: false
});

module.exports = Chamados;