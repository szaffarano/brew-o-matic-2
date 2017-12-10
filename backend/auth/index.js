'use strict'

const chalk = require("chalk");

module.exports = function (config) {
    const express = require('express');

    const passport = require('passport')

    const TwitterStrategy = require('passport-twitter').Strategy

    const logger = require('../utils/logger')(config);

    const router = express.Router();

    passport.serializeUser(function (user, done) {
        logger.info("[serializeUser] user.id: " + user.id)
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        logger.info("[deserializeUser] user.id: " + user.id)
        done(null, id)
    });

    if (config.auth.twitter.consumerKey && config.auth.twitter.consumerSecret) {
        console.info(chalk.green.bold('Configuring twitter authentication'))

        passport.use(new TwitterStrategy({
            consumerKey: config.auth.twitter.consumerKey,
            consumerSecret: config.auth.twitter.consumerSecret,
            callbackURL: "/auth/twitter/callback"
        }, function (token, tokenSecret, profile, cb) {
            logger.info("Login ok, returning user profile:", profile.userName)
            cb(null, profile);
        }
        ));

        router.get('/twitter', passport.authenticate('twitter'));

        router.get('/twitter/callback',
            passport.authenticate('twitter', { failureRedirect: '/login' }),
            function (req, res) {
                logger.info("callback ok")
                res.redirect('/');
            });
    }

    return router
}
