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
      commit(types.APP_STATUS, {
        message: err,
      })
    })
}

export const updateMetadata = ({ commit }) => {
  axios.get('/api/user/metadata')
    .then(res => {
      commit(types.LOGIN, res.data.user)
    })
    .catch(err => {
      commit(types.APP_STATUS, {
        message: err,
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
      commit(types.APP_STATUS, {
        error: err
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
      commit(types.APP_STATUS, {
        error: err
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
    .catch(error => {
      commit(types.APP_STATUS, {
        error: error
      })
    })
}

export const clearAppStatus = ({ commit }) => {
  commit(types.CLEAR_APP_STATUS)
}
