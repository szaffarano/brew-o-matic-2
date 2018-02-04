import * as types from './mutation-types'
import Vue from 'vue'

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
    /* eslint-disable no-console */
    if (status.message) {
      state.appStatus.push({ message: status.message })
    } else if (status.error) {
      if (status.error.response) {
        let key = ''
        if (status.action) {
          key = safe_append(key, status.action)
        }
        switch (status.error.response.status) {
          case 500:
            state.appStatus.push({
              message: safe_append(key, 'runtime-error'),
              properties: status.object ? { object: status.object } : {}
            })
            break
          case 404:
            state.appStatus.push({
              message: safe_append(key, 'not-found'),
              properties: status.object ? { object: status.object } : {}
            })
            break
          default:
            status.error.response.data.forEach(err => {
              state.appStatus.push({
                message: err.kind,
                path: err.path,
                properties: err.properties ? err.properties : {}
              })
            });
        }
      } else {
        console.log("generic")
        state.appStatus.push({
          key: 'unhandled-error'
        })
      }
    }
  },

  [types.CLEAR_APP_STATUS](state) {
    state.appStatus = []
  },

  [types.DATA_BOTTLES](state, bottles) {
    state.data.bottles = bottles
  },

  [types.DATA_GRAINS](state, grains) {
    state.data.grains = grains
  },

  [types.DATA_HOPS](state, hops) {
    state.data.hops = hops
  },

  [types.DATA_MISCS](state, misc) {
    state.data.misc = misc
  },

  [types.DATA_STYLES](state, styles) {
    Vue.set(state.data, 'styles', styles)
  },

  [types.DATA_YEASTS](state, yeasts) {
    state.data.yeasts = yeasts
  },

}

function safe_append(value, new_value) {
  if (!value || value.length == 0) {
    return new_value
  }
  return value + '-' + new_value
}
