'use strict';

module.exports = function(router, config, createUser, logger) {
  if (config.configureGoogle()) {
    const passport = require('passport')
    const GoogleStrategy = require('passport-google-oauth20').Strategy;
    const chalk = require('chalk');

    const C = require('../utils/constants')

    logger.info(chalk.green.bold('[Google]', 'Configuring authentication'))

    passport.use(new GoogleStrategy({
        clientID: config.auth.google.clientID,
        clientSecret: config.auth.google.clientSecret,
        passReqToCallback: true,
        callbackURL: config.app.url + '/auth/google/callback',
      },
      function(req, accessToken, refreshToken, profile, cb) {
        const userProfile = {
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.emails[0].value,
          provider: C.PROVIDER_GOOGLE,
          profileId: profile.id,
        }

        createUser(req, userProfile, cb)
      }
    ));

    router.get("/google", passport.authenticate("google", {
      scope: "profile email"
    }));

    router.get("/google/callback", passport.authenticate("google", {
      successRedirect: '/#/',
      failureRedirect: "/login"
    }));

  }

}
