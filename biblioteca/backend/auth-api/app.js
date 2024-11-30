require('dotenv').config();  // Carrega variáveis do arquivo .env


const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(cors());

const jwtSecret = process.env.JWT_SECRET; // Acessa o valor de JWT_SECRET

const authRoutes = require('./routes/authRoutes');  // Supondo que as rotas de autenticação estão no arquivo 'authRoutes.js'

app.use(express.json());  // Para fazer o parse de JSON no corpo das requisições

app.use('/api/auth', authRoutes);  // Rota de autenticação

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conectado ao MongoDB');
})
.catch((error) => {
  console.error('Erro ao conectar ao MongoDB', error);
});

// Porta de execução do servidor
const PORT = process.env.PORT || 5000;  // Usa a porta do ambiente ou a porta 5000 por padrão

// Inicia o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));  // Corrigido para usar backticks
