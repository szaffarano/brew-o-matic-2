const express = require('express');
const router = express.Router();
const sessionUtils = require('../utils/session')
const userServices = require('../services/user')

router.get('/logout',
  sessionUtils.hasSession, sessionUtils.logout);

router.get('/metadata',
  sessionUtils.hasSession, userServices.getMetadata);

router.put('/settings',
  sessionUtils.hasSession, userServices.updateUserSettings)

router.get('/settings',
  sessionUtils.hasSession, userServices.getUserSettings)

router.get('/settings/metadata',
  sessionUtils.hasSession, userServices.getUserSettingsMetadata)

module.exports = router
