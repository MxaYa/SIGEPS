const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Chamados = require('./Chamados');
const Especialistas = require('./Especialistas');

const Especialista_chamado = sequelize.define('Especialista_chamado', {
    
    codigoEspecialista: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        references: {
            model: 'Especialistas',
            key: 'codigoEspecialista',
        },
    },
    
    numeroChamado: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        references: {
            model: 'Chamados',
            key: 'numeroChamado',
        },
    },
    
},{
    tableName: 'Especialista_Chamado', 
    timestamps: false
});

Especialista_chamado.hasMany(Chamados, { foreignKey: 'numeroChamado'});
Especialista_chamado.hasMany(Especialistas, {foreignKey: 'codigoEspecialista'});

module.exports = Especialista_chamado;