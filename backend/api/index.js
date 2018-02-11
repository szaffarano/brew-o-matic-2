const express = require('express');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ success: 'true' })
});

router.use('/user', require('./user'));
router.use('/data', require('./data'));

module.exports = router
