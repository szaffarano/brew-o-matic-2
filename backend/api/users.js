var express = require('express');
var router = express.Router();

router.get('/user', function (req, res, next) {
  res.json({
    users: [
      { name: 'Juan', lastname: 'Perez' },
      { name: 'John', lastname: 'Smith' }
    ]
  })
});

module.exports = router;
