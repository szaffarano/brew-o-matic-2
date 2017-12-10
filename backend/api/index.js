
module.exports = function (config) {
  const express = require('express');

  const logger = require('../utils/logger')(config);

  const router = express.Router();

  router.get('/', function (req, res, next) {
    res.json({ success: 'true' })
  });

  router.use('/', require('./users'));

  return router
}
