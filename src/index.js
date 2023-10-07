const { app } = require('./app');
const { Config } = require('./config');
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

  app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 🚀`));
};

startServer().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
});
