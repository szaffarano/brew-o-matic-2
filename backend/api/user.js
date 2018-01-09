'use strict'

module.exports = function(config, logger) {
  const express = require('express');
  const router = express.Router();
  const { hasSession, logout } = require('../utils/session')(config, logger)
  const User = require('../domain/user')

  router.get("/logout", hasSession, function(req, res) {
    logout(req, res)
  });

  router.get('/metadata', function(req, res) {
    req.ability.throwUnlessCan('read', 'Metadata')

    let user = {}

    if (req.isAuthenticated()) {
      user = req.user
    }

    res.json({
      user: user
    })
  });

  router.put('/settings', hasSession, function(req, res) {
    req.ability.throwUnlessCan('update', 'User')

    User.findOne({ _id: req.user._id },
      function(err, user) {
        if (err) {
          logger.error("Error finding user", err);
          res.send(500, { error: err });
        } else {
          user.settings = req.body;

          user.save(function(err, resp) {
            if (err) {
              logger.error("Error updating settings", err);
            }

            res.send(user);
            //@TODO: ver mecanismo de actions
            // actions.log(req.session.user_id, "UPDATE_SETTINGS", "User: " + user.name);
          });
        }
      });
  })

  async function findPost(req, res) {
    const post = await User.find({ _id: req.params.id })

    req.ability.throwUnlessCan('read', post)
    res.send(post)
  }

  router.get('/settings', hasSession, function(req, res) {
    req.ability.throwUnlessCan('read', 'Settings')

    User.findOne({ _id: req.user._id },
      function(err, user) {
        if (err) {
          logger.error("Error finding user", err);
          res.send(500, { error: err });
        } else {
          req.ability.throwUnlessCan('read', user)
          res.json(
            user.settings
          )
        }
      });
  })

  router.get('/settings/metadata', hasSession, function(req, res) {
    req.ability.throwUnlessCan('read', 'Settings')
    let metadata = {}

    User.schema.eachPath(name => {
      if (name.match(/^settings\.defaultValues/)) {
        let path = User.schema.path(name)
        //logger.info(path)
        metadata[name.replace(/^settings\.defaultValues\./, "")] = {
          type: path.instance,
          validators: path.validators
        }
      }
    });

    res.json(metadata);
  })

  return router
}
