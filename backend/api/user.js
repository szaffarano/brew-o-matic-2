'use strict'

module.exports = function(config, logger) {
  const express = require('express');
  const router = express.Router();
  const { hasSession, logout } = require('../utils/session')(config, logger)

  router.get("/logout", function(req, res) {
    logout(req, res)
  });

  router.get('/metadata', hasSession, function(req, res) {
    req.ability.throwUnlessCan('read', 'Metadata')

    const { username, name, email, roles } = req.user
    res.json({
      user: { username, name, email, roles }
    })
  });

  return router
}
