const express = require('express');

const errorMid = require('./middleware/error');

const loginRouter = require('./routers/login.router');

const routerCategory = require('./routers/categorie.router');

const postUserRouter = require('./routers/user.router');

const postCategoryRouter = require('./routers/post.category.router');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', postUserRouter);

app.use('/categories', routerCategory);

app.use('/post', postCategoryRouter);

app.use(errorMid);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
