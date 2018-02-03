module.exports = function(config, logger) {
  const express = require('express');

  const router = express.Router();

  router.get('/', function(req, res, next) {
    res.json({ success: 'true' })
  });

  router.use('/user', require('./user')(config, logger));
  router.use('/data', require('./data')(config, logger));

  return router
}
