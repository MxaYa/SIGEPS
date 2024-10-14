const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Permissoes_do_usuario = sequelize.define('Permissoes_do_usuario', {
    
    id_permissoes: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        autoIncrement: true,
        primaryKey: true,
    },
    
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    role: {
        type: DataTypes.ENUM,
        allowNull: false, // Converte o valor booleano para string min�scula
        
    },
    
    permissions: {
        type: DataTypes.LONGTEXT,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    created_at: {
        type: DataTypes.TIMESTAMP,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
    updated_at: {
        type: DataTypes.TIMESTAMP,
        allowNull: true, // Converte o valor booleano para string min�scula
        
    },
    
},{
    tableName: 'Permissoes_do_usuario', 
    timestamps: false
});

module.exports = Permissoes_do_usuario;