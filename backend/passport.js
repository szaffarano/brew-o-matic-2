'use strict'

const chalk = require('chalk');
const passport = require('passport')

const User = require('./domain/user')

module.exports = function(config, app, logger) {
  logger.info(chalk.green.bold('Configuring passport...'))

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    logger.debug(`[serializeUser] id: ${user.username}`)

    done(null, user.username);
  });

  passport.deserializeUser(function(id, done) {
    logger.debug(`[deserializeUser] id: ${id}`)

    User.findOne({
      username: id
    }, function(err, user) {
      if (err) {
        logger.debug(`[deserializeUser] user id: ${id} not found`, err)
        return done(err);
      }

      logger.debug(`[deserializeUser] user id: ${id} was found`)
      return done(null, user);
    });
  });
}
