import * as types from './mutation-types'

export default {
  [types.LOGIN](state, user) {
    state.user = user
  },

  [types.LOGOUT](state) {
    state.user = null
  },

  [types.USER_SETTINGS](state, settings) {
    state.userSettings = settings
  },

  [types.USER_SETTINGS_METADATA](state, settings) {
    state.userSettingsMetadata = settings
  },

  [types.APP_STATUS](state, status) {
    if (status.message) {
      state.appStatus.push({ message: status.message })
    } else if (status.error) {
      if (status.error.response) {
        status.error.response.data.forEach(err => {
          state.appStatus.push({
            message: err.kind,
            path: err.path,
            properties: err.properties ? err.properties : {}
          })
        });
      } else {
        state.appStatus.push({
          key: 'unhandled-error'
        })
      }
    }

    /* eslint-disable no-console */
    console.log("status", status)
  },

  [types.CLEAR_APP_STATUS](state) {
    state.appStatus = []
  }
}
