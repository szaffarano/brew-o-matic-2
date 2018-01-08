import axios from 'axios'

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

export const login = ({ commit }, be) => {
  window.location = `/auth/${be}`
}

export const logout = ({ commit }) => {
  axios.get('/api/user/logout')
    .then(res => {
      commit('logout')
    })
    .catch(err => {
      console.log('Error realizando logout!')
    })
}

export const updateMetadata = ({ commit }) => {
  axios.get('/api/user/metadata')
    .then(res => {
      commit('login', res.data.user)
    })
    .catch(err => {
      console.log("Error obteniendo metadata", err)
    })
}

export const getUserSettings = ({ commit }) => {
  axios
    .get('/api/user/settings')
    .then(res => {
      commit('userSettings', res.data)
    })
    .catch(err => {
      console.log('Error obteniendo user-settings', err)
    })
}

export const getUserSettingsMetadata = ({ commit }) => {
  axios
    .get('/api/user/settings/metadata')
    .then(res => {
      commit('userSettingsMetadata', res.data)
    })
    .catch(err => {
      console.log('Error obteniendo user-settings-metadata', err)
    })
}
