const { config } = require('dotenv');
const { ENVIRONMENT } = require('../constants');

config({ path: `.env.${process.env.NODE_ENV || ENVIRONMENT.DEV}` });

const { PORT, NODE_ENV } = process.env;

const Config = {
  PORT: PORT,
  NODE_ENV,
};

module.exports = { Config };
