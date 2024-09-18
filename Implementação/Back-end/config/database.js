// database.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config({ path: './config/dbConfig.env' });

// Criar conexão com o MySQL usando Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

// Testar a conexão
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao MySQL com Sequelize');
    } catch (error) {
        console.error('Erro ao conectar ao MySQL:', error);
    }
};

testConnection();

module.exports = sequelize;
