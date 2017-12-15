'use strict'

module.exports = function(config, logger) {
  const express = require('express');
  const router = express.Router();
  const { hasSession, logout } = require('../utils/session')(config, logger)

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

  return router
}
