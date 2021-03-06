'use strict'

const config = require('config')
const logger = require('../utils/logger')
const authUtils = require('./utils')

module.exports = function(router) {
  if (authUtils.strategies.configureLinkedIn()) {
    const passport = require('passport')
    const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
    const chalk = require('chalk')

    const C = require('../utils/constants')

    logger.info(chalk.green.bold('[LinkedIn]', 'Configuring authentication'))

    passport.use(new LinkedInStrategy({
        clientID: config.auth.linkedin.clientID,
        clientSecret: config.auth.linkedin.clientSecret,
        passReqToCallback: true,
        callbackURL: config.app.url + '/auth/linkedin/callback',
        scope: ['r_emailaddress', 'r_basicprofile']
      },
      function(req, accessToken, refreshToken, profile, cb) {
        const userProfile = {
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.emails[0].value,
          provider: C.PROVIDER_LINKEDIN,
          profileId: profile.id,
        }

        authUtils.createUser(req, userProfile, cb)
      }
    ))

    router.get('/linkedin', passport.authenticate('linkedin'))

    router.get('/linkedin/callback', passport.authenticate('linkedin', {
      successRedirect: '/#/',
      failureRedirect: '/login'
    }))

  }
  router.get('/linkedin/supported', (req, res) => {
    res.json({ supported: authUtils.strategies.configureLinkedIn() })
  })
}
