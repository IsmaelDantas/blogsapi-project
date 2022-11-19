const express = require('express');

const errorMid = require('./middleware/error');

const loginRouter = require('./routers/login.router');

const postUserRouter = require('./routers/user.router');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', postUserRouter);

app.use(errorMid);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
