# projeto-ci-cd-back

## Objetivo
API simples Node + Express para demonstração de CI/CD com Render e GitHub Actions.

## Como rodar localmente
1. Instalar dependências: `npm install`
2. Rodar: `PORT=10000 node index.js`
3. Acessar: `http://localhost:10000/`

## Deploy
- Deploy automático via GitHub Actions quando uma tag SemVer é criada (ex: `v1.0.0`).
- Repositório configurado para criar deploy no Render via API.

## Endpoints
`GET /` -> `{ "mensagem": "API online e integrada com CI/CD!" }`

## prj_yWAPCDROKNA7MLlL9e5oY8jzraeH