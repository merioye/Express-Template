const { serve, setup } = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const swaggerJSDocs = YAML.load(path.resolve(__dirname, './swagger.yaml'));

const swaggerConfig = {
  serve: serve,
  setup: setup(swaggerJSDocs),
};

module.exports = { swaggerConfig };
