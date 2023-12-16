const { logger } = require('../config');

// eslint-disable-next-line no-unused-vars
const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const type = err.name || 'Internal Server Error';
  const message = err.message || 'Something went wrong';
  const path = req.path || '';
  const location = err.location || '';

  logger.error(message, { path, location });

  res.status(statusCode).json({
    errors: [
      {
        type,
        message,
        path,
        location,
      },
    ],
  });
};

module.exports = { errorHandlerMiddleware };
