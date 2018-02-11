'use strict';

const config = require('config')
const logger = require('../utils/logger')
const authUtils = require('./utils')

module.exports = function(router) {

  if (authUtils.strategies.configureTwitter()) {
    const passport = require('passport')
    const TwitterStrategy = require('passport-twitter').Strategy
    const chalk = require('chalk');

    const C = require('../utils/constants')

    logger.info(chalk.green.bold('[Twitter]', 'Configuring authentication'))

    passport.use(new TwitterStrategy({
      consumerKey: config.auth.twitter.consumerKey,
      consumerSecret: config.auth.twitter.consumerSecret,
      passReqToCallback: true,
      callbackURL: config.app.url + '/auth/twitter/callback',
    }, function(req, token, tokenSecret, profile, cb) {
      const userProfile = {
        name: profile.displayName,
        email: `${profile.username}@twitter.com`,
        username: profile.username,
        provider: C.PROVIDER_TWITTER,
        profileId: profile.id,
      }
      authUtils.createUser(req, userProfile, cb)
    }));

    router.get('/twitter', passport.authenticate('twitter'));
    router.get('/twitter/callback',
      passport.authenticate('twitter', {
        successRedirect: '/#/',
        failureRedirect: '/login'
      }));
  }
  router.get("/twitter/supported", (req, res) => {
    res.json({ supported: authUtils.strategies.configureTwitter() })
  })
}
