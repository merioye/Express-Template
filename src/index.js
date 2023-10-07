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

  const server = app.listen(PORT, () =>
    logger.info(`Listening on PORT ${PORT} 🚀`),
  );

  const handleGracefulShutdown = (signal) => {
    logger.info(`${signal} signal received, closing http server...`);
    server.close(() => {
      logger.info('Http server is closed.');
      // close DB connection here
      process.exit(0);
    });
  };

  process.on('SIGINT', () => {
    handleGracefulShutdown('SIGINT');
  });

  process.on('SIGTERM', () => {
    handleGracefulShutdown('SIGTERM');
  });
};

startServer().catch((err) => {
  logger.error(err instanceof Error ? err.message : err);
  setTimeout(() => {
    process.exit(1);
  }, 1000);
});
