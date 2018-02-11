'use strict';

const config = require('config')
const logger = require('../utils/logger')
const authUtils = require('./utils')

module.exports = function(router) {
  if (authUtils.strategies.configureFacebook()) {
    const passport = require('passport')
    const FacebookStrategy = require('passport-facebook').Strategy;
    const chalk = require('chalk');

    const C = require('../utils/constants')

    logger.info(chalk.green.bold('[Facebook]', 'Configuring authentication'))

    passport.use(new FacebookStrategy({
        clientID: config.auth.facebook.clientID,
        clientSecret: config.auth.facebook.clientSecret,
        passReqToCallback: true,
        callbackURL: config.app.url + '/auth/facebook/callback',
        profileFields: ['name', 'emails', 'link', 'locale', 'timezone']
      },
      function(req, accessToken, refreshToken, profile, cb) {
        const userProfile = {
          name: profile.name.givenName + ' ' + profile.name.familyName,
          email: profile._json.email,
          username: profile._json.email,
          provider: C.PROVIDER_FACEBOOK,
          profileId: profile.id,
        }
        authUtils.createUser(req, userProfile, cb)
      }
    ));

    router.get('/facebook', passport.authenticate('facebook', {
      scope: ['email']
    }));

    router.get('/facebook/callback', passport.authenticate('facebook', {
      successRedirect: '/#/',
      failureRedirect: '/login'
    }));

  }

  router.get('/facebook/supported', (req, res) => {
    res.json({ supported: authUtils.strategies.configureFacebook() })
  })

}
