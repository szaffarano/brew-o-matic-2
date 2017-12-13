const winston = require('winston');

module.exports = function(config) {
  let transports = []

  transports.push(new winston.transports.Console({
    level: config.logging.console.level,
    colorize: true,
    prettyPrint: true,
    handleExceptions: process.env.NODE_ENV === "production"
  }));

  return new winston.Logger({
    level: "debug",
    transports: transports,
    exitOnError: false
  });
};
