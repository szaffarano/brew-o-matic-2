'use strict'

const mongoose = require('mongoose')

module.exports = function(config, logger) {
  const chalk = require("chalk");

  let db

  mongoose.Promise = global.Promise

  if (mongoose.connection.readyState !== 1) {
    logger.info(chalk.green.bold(`Connecting to Mongo ${config.db.uri}...`))

    db = mongoose.connect(config.db.uri, config.db.options,
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

  return db
}
