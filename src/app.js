const express = require('express');
const createError = require('http-errors');
const helmet = require('helmet');
const compression = require('compression');
const { router } = require('./routes');
const { errorHandlerMiddleware } = require('./middlewares');

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());

app.use('/api', router);

// eslint-disable-next-line no-unused-vars
app.all('*', (req, res) => {
  throw createError(404, 'Route not found');
});

app.use(errorHandlerMiddleware);

module.exports = { app };
