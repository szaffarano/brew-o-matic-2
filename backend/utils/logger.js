const { createLogger, format, transports } = require('winston');

const config = require('config')
const transps = []

transps.push(new transports.Console({
  level: config.logging.console.level,
  colorize: true,
  prettyPrint: true,
  handleExceptions: process.env.NODE_ENV === 'production'
}))

module.exports = new createLogger({
  level: 'debug',
  format: format.simple(),
  transports: transps,
  exitOnError: false
})
