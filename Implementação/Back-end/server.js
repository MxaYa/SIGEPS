
const express = require('express');
const sequelize = require('./config/database.js');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const administradorRoutes = require('./routes/Controlls/AdministradorController');
const clienteRoutes = require('./routes/Controlls/ClienteController');
const especialistaRoutes = require('./routes/Controlls/EspecialistaController');
const triagemRoutes = require('./routes/Controlls/TriagemController');


app.use(express.json());

/* app.get('/', (req, res) => {
    res.send('API funcionando!');
}); */

app.use(cors());
app.use(express.json());

console.log('Rotas registradas:');
app.use('/Handlesadm', administradorRoutes);
app.use('/Handlescliente', clienteRoutes);
app.use('/Handlesespecialista', especialistaRoutes);
app.use('/Handlestriagem', triagemRoutes);


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
