'use strict'

const User = require('../domain/user')

module.exports = function(config, logger) {
  const express = require('express');
  const passport = require('passport')

  const router = express.Router();

  function createUser(req, userProfile, cb) {
    if (req.user) {
      logger.info(`[${userProfile.provider}]`, 'User already authenticated');
      return cb(null, req.user);
    } else {
      logger.info(`[${userProfile.provider}]`, 'User not authenticated');
    }

    User.findOne({
      username: userProfile.username.toLowerCase()
    }, function(err, u) {
      if (u) {
        logger.info(`[${userProfile.provider}]`, 'Returning existent user')
        return cb(err, u);
      }

      let user = new User();
      user.name = userProfile.name;
      user.email = userProfile.email;
      user.username = userProfile.username;
      user.provider = userProfile.provider;
      user.profileId = userProfile.profileId

      user.singInDate = new Date();
      user.lastLogin = new Date();
      user.settings = {
        "defaultValues": {
          "BATCH_SIZE": 20,
          "EFFICIENCY": 70,
          "BREWER": user.name,
          "BOIL_TIME": 90,
          "GrainTemp": 25,
          "WatertoGrainRatio": 3,
          "mashTemp": 66,
          "lossMashTemp": 0,
          "SpargeTempDesired": 75,
          "SpargeDeadSpace": 0,
          "GrainAbsorbtion": 0.9,
          "PercentEvap": 10,
          "TrubChillerLosses": 0,
          "isPublic": false,
          "pitchRate": 0.75
        }
      };

      logger.info(
        `[${userProfile.provider}]`,
        `User ${userProfile.username} not found in db, creating...`)

      user.save(function(err) {
        if (err) {
          logger.error(`[${userProfile.provider}]`, 'Error creating user in db', err)
        }
        cb(err, user);
      });
    })
  }

  require('./twitter')(router, config, createUser, logger)
  require('./google')(router, config, createUser, logger)
  require('./facebook')(router, config, createUser, logger)
  require('./github')(router, config, createUser, logger)
  require('./linkedin')(router, config, createUser, logger)

  return router
}
