const express = require('express');
const cors = require('cors');

const app = express();

// Configuração CORS corrigida,
const allowedOrigin = process.env.FRONT_URL || 'https://projeto-ci-cd-front-beryl.vercel.app';

app.use(cors({
    origin: allowedOrigin,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para parsing JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.json({ 
        mensagem: "API online ??? e integrada com CI/CD!",
        // timestamp: new Date().toISOString(), trazer a data atual
        // versao: "1.0.0", trazer a versão da API
    });
});

// Rota de saúde para verificar se a API está funcionando
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'API está funcionando corretamente',
        timestamp: new Date().toISOString()
    });
});

// Rota adicional de exemplo
app.get('/info', (req, res) => {
    res.json({
        projeto: "CI/CD Backend",
        descricao: "API para integração com frontend",
        ambiente: process.env.NODE_ENV || 'development',
        porta: process.env.PORT || 5500
    });
});

// Middleware para rotas não encontradas
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Rota não encontrada',
        path: req.originalUrl
    });
});

// Middleware de tratamento de erros
app.use((error, req, res, next) => {
    console.error('Erro:', error);
    res.status(500).json({
        error: 'Erro interno do servidor',
        message: process.env.NODE_ENV === 'production' ? 'Erro interno' : error.message
    });
});

const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`🚀 API rodando na porta ${port}`);
    console.log(`📍 URL: http://localhost:${port}`);
    console.log(`🌐 Frontend permitido: ${allowedOrigin}`);
});