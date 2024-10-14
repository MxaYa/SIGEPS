const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Plano_de_implantacao = sequelize.define('Plano_de_implantacao', {
    
    id_plano: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        autoIncrement: true,
        primaryKey: true,
    },
    
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'plano_de_implantacao', 
    timestamps: false
});

module.exports = Plano_de_implantacao;