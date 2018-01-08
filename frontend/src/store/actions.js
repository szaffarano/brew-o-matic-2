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
      console.log('Error realizando logout!')
    })
}

export const updateMetadata = ({ commit }) => {
  axios.get('/api/user/metadata')
    .then(res => {
      commit(types.LOGIN, res.data.user)
    })
    .catch(err => {
      console.log("Error obteniendo metadata", err)
    })
}

export const getUserSettings = ({ commit }) => {
  axios
    .get('/api/user/settings')
    .then(res => {
      commit(types.USER_SETTINGS, res.data)
    })
    .catch(err => {
      console.log('Error obteniendo user-settings', err)
    })
}

export const getUserSettingsMetadata = ({ commit }) => {
  axios
    .get('/api/user/settings/metadata')
    .then(res => {
      commit(types.USER_SETTINGS_METADATA, res.data)
    })
    .catch(err => {
      console.log('Error obteniendo user-settings-metadata', err)
    })
}
