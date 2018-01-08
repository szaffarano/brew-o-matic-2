export const login = (state, user) => {
  state.user = user
}

export const logout = (state) => {
  state.user = null
}

export const userSettings = (state, settings) => {
  state.userSettings = settings
}

export const userSettingsMetadata = (state, settings) => {
  state.userSettingsMetadata = settings
}
