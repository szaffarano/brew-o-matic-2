'use strict';

module.exports = function(router, config, createUser, logger) {
  if (config.configureGithub()) {
    const passport = require('passport')
    const GitHubStrategy = require('passport-github2').Strategy;
    const chalk = require('chalk');

    const C = require('../utils/constants')

    logger.info(chalk.green.bold('[GitHub]', 'Configuring authentication'))

    passport.use(new GitHubStrategy({
        clientID: config.auth.github.clientID,
        clientSecret: config.auth.github.clientSecret,
        passReqToCallback: true,
        callbackURL: "/auth/github/callback"
      },
      function(req, accessToken, refreshToken, profile, cb) {
        const userProfile = {
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.emails[0].value,
          provider: C.PROVIDER_GITHUB,
          profileId: profile.id,
        }

        createUser(req, userProfile, cb)
      }
    ));

    router.get("/github", passport.authenticate("github", {
      scope: ['user:email']
    }));

    router.get("/github/callback", passport.authenticate("github", {
      successRedirect: '/#/',
      failureRedirect: "/login"
    }));

  }

}
