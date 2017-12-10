const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');

router.get("/logout", function (req, res) {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.get('/metadata', function (req, res) {
  if (req.user) {
    res.json(req.user)
  } else {
    res.status(HttpStatus.UNAUTHORIZED)
      .json({'message': 'No session available'})
  }
});

module.exports = router;
