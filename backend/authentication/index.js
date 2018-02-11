'use strict'

const express = require('express')

const router = express.Router()

require('./twitter')(router)
require('./google')(router)
require('./facebook')(router)
require('./github')(router)
require('./linkedin')(router)

router.get("/authenticated", (req, res) => {
  res.json({ authenticated: req.user ? true : false })
})

module.exports = router
