'use strict';

global.WEBPACK_BUNDLE = false

const chalk = require("chalk")

const config = require('config')
const logger = require('./utils/logger')

logger.info(chalk.bold('Configuring BoM...'))

const app = require('./express')

process.on('unhandledRejection', (err) => {
  logger.error(err);
  throw err
})

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

logger.info(chalk.bold('BoM was configured successfully!'))

module.exports = app
