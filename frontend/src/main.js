// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'

import App from './App'

import router from './router'
import store from './store'
import messages from './i18n'

import 'vuetify/dist/vuetify.css'
import 'font-awesome/css/font-awesome.css'
import 'mdi/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueI18n)

const i18n = new VueI18n({ locale: 'es', messages })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})
