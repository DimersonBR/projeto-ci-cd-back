const express = require('express');
const cors = require('cors');

const app = express();

// Permitir o front (substitua pela URL do front na Vercel)
const allowedOrigin = process.env.FRONT_URL || 'https://seu-front.vercel.app';
app.use(cors({ origin: allowedOrigin }));

app.get('/', (req, res) => {
  res.json({ mensagem: "API online e integrada com CI/CD!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
