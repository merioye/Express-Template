const { catchAsyncError } = require('./catchAsyncError');
const { errorHandlerMiddleware } = require('./errorHandler.middleware');

module.exports = { catchAsyncError, errorHandlerMiddleware };
