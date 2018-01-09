import axios from 'axios'
import * as types from './mutation-types'

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

export const login = ({ commit }, be) => {
  window.location = `/auth/${be}`
}

export const logout = ({ commit }) => {
  axios.get('/api/user/logout')
    .then(res => {
      commit(types.LOGOUT)
    })
    .catch(err => {
      // @TODO better error handling
      console.log(err)

      commit(types.APP_STATUS, {
        message: 'error-logout',
        error: true
      })
    })
}

export const updateMetadata = ({ commit }) => {
  axios.get('/api/user/metadata')
    .then(res => {
      commit(types.LOGIN, res.data.user)
    })
    .catch(err => {
      console.log(err)

      commit(types.APP_STATUS, {
        message: 'error-getting-metadata',
        error: true
      })
    })
}

export const getUserSettings = ({ commit }) => {
  axios
    .get('/api/user/settings')
    .then(res => {
      commit(types.USER_SETTINGS, res.data)
    })
    .catch(err => {
      console.log(err)
      commit(types.APP_STATUS, {
        message: 'error-getting-user-settings',
        error: true
      })
    })
}

export const getUserSettingsMetadata = ({ commit }) => {
  axios
    .get('/api/user/settings/metadata')
    .then(res => {
      commit(types.USER_SETTINGS_METADATA, res.data)
    })
    .catch(err => {
      console.log(err)
      commit(types.APP_STATUS, {
        message: 'error-getting-user-settings-metadata',
        error: true
      })
    })
}

export const saveUserSettings = ({ commit }, userSettings) => {
  axios
    .put('/api/user/settings', userSettings)
    .then(res => {
      commit(types.APP_STATUS, {
        message: 'user-settings-update-ok'
      })
    })
    .catch(err => {
      console.log('Error obteniendo user-settings-metadata', err)
      commit(types.APP_STATUS, {
        message: 'error-on-update-user-settings',
        error: true
      })
    })
}

export const clearAppStatus = ({ commit }) => {
  commit(types.APP_STATUS, {})
}
