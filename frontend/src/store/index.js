import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  actions: {
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-console */
    login({ commit }, be) {
      window.location = `/auth/${be}`
    },
    logout({ commit }) {
      axios.get('/api/user/logout')
        .then(res => {
          commit('logout')
        })
        .catch(err => {
          console.log('Error realizando logout!')
        })
    },
    updateMetadata({ commit }) {
      axios.get('/api/user/metadata')
        .then(res => {
          commit('login', res.data.user)
        })
        .catch(err => {
          console.log("Error obteniendo metadata", err)
        })

    }
  },
  getters: {
    isAuthenticated: state => state.user && state.user.username,
    user: state => state.user
  },
  mutations: {
    login(state, user) {
      state.user = user
    },
    logout(state) {
      state.user = null
    }
  }
})
