const { createLogger, format, transports } = require('winston');
const { Config } = require('./config');
const { ENVIRONMENT } = require('../constants');

const isTestingEnvironment = Config.NODE_ENV === ENVIRONMENT.TEST;

const customFormat = {
  console: format.printf(({ timestamp, level, stack, message }) => {
    return `${timestamp} [${level}]: ${stack || message}`;
  }),
};

const logger = createLogger({
  level: 'info',
  defaultMeta: {
    application: 'express template',
  },
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.json(),
  ),
  transports: [
    new transports.Console({
      level: 'info',
      silent: isTestingEnvironment,
      format: format.combine(
        format.colorize(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        customFormat.console,
      ),
    }),
    new transports.File({
      level: 'error',
      dirname: 'logs',
      filename: 'error.log',
      silent: isTestingEnvironment,
    }),
    new transports.File({
      level: 'info',
      dirname: 'logs',
      filename: 'combined.log',
      silent: isTestingEnvironment,
    }),
  ],
});

module.exports = { logger };
