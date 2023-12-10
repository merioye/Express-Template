const { config } = require('dotenv');
const path = require('path');

config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const { PORT, NODE_ENV } = process.env;

const Config = {
  PORT: PORT,
  NODE_ENV,
};

module.exports = { Config };
