const { app } = require('./app');
const { Config, logger } = require('./config');
const { configService } = require('./services');

const { PORT } = Config;

// fake DB connection
const connectToDB = () => {
  return Promise.resolve();
};

const startServer = async () => {
  configService.requireConfig();
  // establish DB connection here
  await connectToDB();

  app.listen(PORT, () => logger.info(`Listening on PORT ${PORT} 🚀`));
};

startServer().catch((err) => {
  logger.error(err instanceof Error ? err.message : err);
});
