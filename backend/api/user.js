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
    ({ username, name, email, roles } = req.user)
    res.json({
      user: { username, name, email, roles }
    })
  } else {
    res.status(HttpStatus.UNAUTHORIZED)
      .json({ 'message': 'No session available' })
  }
});

module.exports = router;
