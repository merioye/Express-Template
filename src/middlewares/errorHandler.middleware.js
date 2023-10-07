const { logger } = require('../config');

// eslint-disable-next-line no-unused-vars
const errorHandlerMiddleware = (err, req, res, next) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        message: err.message,
        path: '',
        location: '',
      },
    ],
  });
};

module.exports = { errorHandlerMiddleware };
