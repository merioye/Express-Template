const { Config } = require('../config');

class ConfigService {
  #config;

  constructor(config) {
    this.#config = config;
  }

  requireConfig = () => {
    const keys = Object.keys(this.#config);
    for (const key of keys) {
      if (this.#config[key] === undefined) {
        throw new Error(`${key} is not defined`);
      }
    }
  };
}

const configService = new ConfigService(Config);

module.exports = { configService };
