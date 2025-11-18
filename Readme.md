# projeto-ci-cd-back

## Objetivo
API simples Node + Express para demonstração de CI/CD com Render e GitHub Actions.

## Como rodar localmente
1. Instalar dependências: `npm install`
2. Rodar: `node .\index.js` ou `npm start`
3. Acessar Local: `http://localhost:5500/`
4. Acessar Vercel: `https://projeto-ci-cd-front-beryl.vercel.app/`

## Deploy
- Deploy automático via GitHub Actions quando uma tag SemVer é criada (ex: `v1.0.0`).
- Repositório configurado para criar deploy no Render via API

## Endpoints
`GET /` -> `{ "mensagem": "API online e integrada com CI/CD!" }`
