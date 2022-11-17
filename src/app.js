const express = require('express');
const erro = require('./middlewares/error');
const routeLogin = require('./routes/routerLogin');

// ...

const app = express();

app.use(express.json());

app.use('/login', routeLogin);

app.use(erro);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
