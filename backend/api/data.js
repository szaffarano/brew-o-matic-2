const logger = require('../utils/logger')

const express = require('express');
const router = express.Router();
const sessionUtils = require('../utils/session')
const dataServices = require('../services/data')

Object.entries(dataServices).forEach((e) => {
  const name = e[0].toLowerCase()
  const services = e[1]

  logger.debug(`Registering routes under path '/${name}'`)

  router.get(`/${name}`, sessionUtils.hasSession, services.findAll);
  router.get(`/${name}/:id`, sessionUtils.hasSession, services.findById);
  router.post(`/${name}/:id`, sessionUtils.hasSession, services.save);
  router.post(`/${name}`, sessionUtils.hasSession, services.save);
  router.delete(`/${name}/:id`, sessionUtils.hasSession, services.remove);
})

module.exports = router
