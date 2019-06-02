'use strict'

const mongoose = require('mongoose')

const config = require('config')
const logger = require('./utils/logger')

const chalk = require('chalk')

let db

logger.info('Initializing mongo')

mongoose.Promise = global.Promise

if (mongoose.connection.readyState !== 1) {
  logger.info(chalk.green.bold(`Connecting to Mongo ${config.db.uri}...`))

  db = mongoose.createConnection(config.db.uri, config.db.options,
    function mongoAfterConnect(err) {
      if (err) {
        logger.info(chalk.red.bold('Could not connect to MongoDB!'))
        return logger.error(err)
      }

      mongoose.set('debug', config.db.debug)
    })
} else {
  logger.info(chalk.green.bold('Mongo already connected.'))
  db = mongoose
}

module.exports = db
