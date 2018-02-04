import axios from 'axios'
import * as types from './mutation-types'


export const login = (_, be) => {
  window.location = `/auth/${be}`
}

export const logout = actionGet('/api/user', 'Logout', types.LOGOUT)

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

export const getUserSettings = actionGet('/api/user', 'Settings', types.USER_SETTINGS)

export const getUserSettingsMetadata = actionGet(
  '/api/user/settings',
  'Metadata',
  types.USER_SETTINGS_METADATA)

export const saveUserSettings = ({ commit }, userSettings) => {
  axios
    .put('/api/user/settings', userSettings)
    .then(() => {
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

export const getBottles = actionGet('/api/data', 'Bottle', types.DATA_BOTTLES)

export const getHops = actionGet('/api/data', 'Hop', types.DATA_HOPS)

export const getGrains = actionGet('/api/data', 'Grain', types.DATA_GRAINS)

export const getMiscs = actionGet('/api/data', 'Misc', types.DATA_MISCS)

export const getStyles = actionGet('/api/data', 'Style', types.DATA_STYLES)

export const getYeasts = actionGet('/api/data', 'Yeast', types.DATA_YEASTS)

function actionGet(url, object, mutation) {
  return ({ commit }) => {
    axios
      .get(`${url}/${object.toLowerCase()}`)
      .then(res => {
        commit(mutation, res.data)
      })
      .catch(err => {
        commit(types.APP_STATUS, {
          error: err,
          object: object,
          action: 'get'
        })
      })
  }
}
