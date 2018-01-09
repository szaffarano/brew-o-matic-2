export const isAuthenticated = (state) => {
  return state.user && state.user.username
}

export const user = (state) => {
  return state.user
}

export const userSettings = (state) => {
  return state.userSettings
}

export const userSettingsMetadata = (state) => {
  return state.userSettingsMetadata
}

export const appStatus = (state) => {
  return state.appStatus
}
