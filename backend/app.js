'use strict';

global.WEBPACK_BUNDLE = false;

const chalk = require("chalk");

const config = require('./config/');

const logger = require('./utils/logger')(config);

logger.info(chalk.bold('Configuring BoM...'));

const db = require('./mongo')(config, logger)
const app = require('./express')(config, db, logger)

process.on('unhandledRejection', (err) => {
  logger.error(err);
  throw err
})
logger.info(chalk.bold('BoM was configured successfully!'));

app.listen(config.port, config.ip, function() {
  logger.info()
  logger.info(`${config.app.title} v${config.app.version} started!`)
  logger.info('----------------------------------------------')
  logger.info('Environment:\t' + chalk.underline.bold(process.env.NODE_ENV))
  logger.info('IP:\t\t' + config.ip)
  logger.info('Port:\t\t' + config.port)
  logger.info('Database:\t\t' + config.db.uri)
  logger.info()

  logger.info('----------------------------------------------')
})

module.exports = app;
