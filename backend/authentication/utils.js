const logger = require('../utils/logger')
const User = require('../domain/user')
const config = require('config')

module.exports = {
  createUser: (req, userProfile, cb) => {
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
        'defaultValues': {
          'BATCH_SIZE': 20,
          'EFFICIENCY': 70,
          'BREWER': user.name,
          'BOIL_TIME': 90,
          'GrainTemp': 25,
          'WatertoGrainRatio': 3,
          'mashTemp': 66,
          'lossMashTemp': 0,
          'SpargeTempDesired': 75,
          'SpargeDeadSpace': 0,
          'GrainAbsorbtion': 0.9,
          'PercentEvap': 10,
          'TrubChillerLosses': 0,
          'isPublic': false,
          'pitchRate': 0.75
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
  },

  strategies: {
    configureTwitter() {
      return (config.auth.twitter &&
        config.auth.twitter.consumerKey &&
        config.auth.twitter.consumerSecret) ? true : false
    },
    configureGoogle() {
      return (config.auth.google &&
        config.auth.google.clientID &&
        config.auth.google.clientSecret) ? true : false
    },
    configureFacebook() {
      return (config.auth.facebook &&
        config.auth.facebook.clientID &&
        config.auth.facebook.clientSecret) ? true : false
    },
    configureGithub() {
      return (config.auth.github &&
        config.auth.github.clientID &&
        config.auth.github.clientSecret) ? true : false
    },
    configureLinkedIn() {
      return (config.auth.linkedin &&
        config.auth.linkedin.clientID &&
        config.auth.linkedin.clientSecret) ? true : false
    }
  }
}
