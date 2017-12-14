'use strict'

const HttpStatus = require('http-status-codes');

module.exports = function(config, logger) {
  return {
    hasSession(req, res, next) {
      if (!req.isAuthenticated()) {
        return res.sendStatus(HttpStatus.UNAUTHORIZED)
      }
      next()
    },
    logout(req, res) {
      req.logout();
      req.session.destroy(e => {
        if (e) {
          logger.error("Error when session was destroyed!", e)
        }
      });
      res.redirect("/");
    }
  }
}
