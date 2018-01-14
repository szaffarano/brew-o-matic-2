'use strict'


module.exports = function(config, logger) {
  const User = require('../domain/user')
  const { handleBusinessError } = require('./utils')(logger)

  return {

    getMetadata(req, res) {
      req.ability.throwUnlessCan('read', 'Metadata')

      let user = {}

      if (req.isAuthenticated()) {
        user = req.user
      }

      res.json({
        user: user
      })
    },

    updateUserSettings(req, res) {
      req.ability.throwUnlessCan('update', 'User')

      User.findOne({ _id: req.user._id },
        function(err, user) {
          if (err) {
            handleBusinessError('finding user settings', err, res)
          } else {
            user.settings = req.body;

            user.save(function(err, resp) {
              if (err) {
                handleBusinessError('updating user settings', err, res)
              } else {
                res.send(user);
                //@TODO: see actions logic in BoM 1
                // actions.log(req.session.user_id, "UPDATE_SETTINGS", "User: " + user.name);
              }
            });
          }
        });
    },

    getUserSettings(req, res) {
      req.ability.throwUnlessCan('read', 'Settings')

      User.findOne({ _id: req.user._id },
        function(err, user) {
          if (err) {
            handleBusinessError('finding user settings', err, res)
          } else {
            req.ability.throwUnlessCan('read', user)
            res.json(
              user.settings
            )
          }
        });
    },

    getUserSettingsMetadata(req, res) {
      req.ability.throwUnlessCan('read', 'Settings')
      let metadata = {}

      User.schema.eachPath(name => {
        if (name.match(/^settings\.defaultValues/)) {
          const path = User.schema.path(name)
          const key = name.replace(/^settings\.defaultValues\./, '')

          metadata[key] = {
            type: path.instance,
            validators: path.validators
          }
        }
      });

      res.json(metadata);
    }

  }
}
