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
    state.appStatus = status
  }
}
