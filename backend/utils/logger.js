const winston = require('winston')

const config = require('config')
const transports = []

transports.push(new winston.transports.Console({
  level: config.logging.console.level,
  colorize: true,
  prettyPrint: true,
  handleExceptions: process.env.NODE_ENV === 'production'
}))

module.exports = new winston.Logger({
  level: 'debug',
  transports: transports,
  exitOnError: false
})
