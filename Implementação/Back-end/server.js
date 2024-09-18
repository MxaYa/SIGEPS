// server.js
const express = require('express');
const sequelize = require('./config/database.js'); // Importa a conexão
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Rota de teste para verificar a conexão
app.get('/test-connection', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send('Conexão com o banco de dados está funcionando!');
    } catch (error) {
        res.status(500).send('Erro ao conectar ao banco de dados.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
