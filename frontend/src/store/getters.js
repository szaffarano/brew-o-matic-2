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

export const dataBottles = (state) => {
  return state.data.bottles
}
export const dataGrains = (state) => {
  return state.data.grains
}
export const dataHops = (state) => {
  return state.data.hops
}
export const dataMiscs = (state) => {
  return state.data.miscs
}
export const dataStyles = (state) => {
  return state.data.styles
}
export const dataYeasts = (state) => {
  return state.data.yeasts
}
