'use strict';

const chalk = require("chalk");

const config = require('./config/');

const logger = require('./utils/logger')(config);

logger.info(chalk.bold('Configuring BoM...'));

const db = require('./mongo')(config, logger)
const app = require('./express')(config, db, logger)

logger.info(chalk.bold('BoM was configured successfully!'));

module.exports = app;