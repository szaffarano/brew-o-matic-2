'use strict';

module.exports = function (router, config, createUser, logger) {
    if (config.configureTwitter()) {
        const passport = require('passport')
        const TwitterStrategy = require('passport-twitter').Strategy
        const chalk = require('chalk');

        const C = require('../utils/constants')

        logger.info(chalk.green.bold('[Twitter]', 'Configuring authentication'))

        passport.use(new TwitterStrategy({
            consumerKey: config.auth.twitter.consumerKey,
            consumerSecret: config.auth.twitter.consumerSecret,
            passReqToCallback: true,
            callbackURL: "/auth/twitter/callback"
        }, function (req, token, tokenSecret, profile, cb) {
            const userProfile = {
                name: profile.displayName,
                email: `${profile.username}@twitter.com`,
                username: profile.username,
                provider: C.PROVIDER_TWITTER,
                profileId: profile.id,
            }
            createUser(req, userProfile, cb)
        }));

        router.get('/twitter', passport.authenticate('twitter'));
        router.get('/twitter/callback',
            passport.authenticate('twitter', { failureRedirect: '/login' }),
            function (req, res) {
                res.redirect('/');
            });
    }
}