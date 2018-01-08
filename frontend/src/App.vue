<template>
  <v-app id="bom2" light>

    <v-navigation-drawer clipped fixed v-model="drawer" app v-if="isAuthenticated">
      <v-list dense >
        <span v-for="m in menu" :key="m.name">
          <span v-if="m.children">
            <v-list-group>
              <v-list-tile slot="item">
                <v-list-tile-action>
                  <v-badge color="red lighten-3" v-if="m.badge">
                    <span slot="badge">{{ m.badge }}</span>
                    <v-icon large>{{ m.icon }}</v-icon>
                  </v-badge>
                  <v-icon v-else>{{ m.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $t(m.to.name) }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile v-for="i in m.children" v-bind:key="i.name" :to="i.to">
                  <v-list-tile-content>
                      <v-list-tile-title>{{ $t(i.to.name) }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>{{ i.icon }}</v-icon>
                  </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </span>
          <span v-else>
            <v-list-tile :to="m.to">
              <v-list-tile-action>
                <v-badge color="red lighten-3" v-if="m.badge">
                  <span slot="badge">{{ m.badge }}</span>
                  <v-icon large>{{ m.icon }}</v-icon>
                </v-badge>
                <v-icon v-else>{{ m.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ $t(m.to.name) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </span>
        </span>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ $t('bom') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left offset-y v-if="isAuthenticated">
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-card>
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon>account_circle</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ user.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-tile>
              <v-list-tile-action><v-icon>mdi-account</v-icon></v-list-tile-action>
              <v-list-tile-title>Profile</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="logout">
              <v-list-tile-action><v-icon>mdi-logout</v-icon></v-list-tile-action>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
      <v-btn @click="switchLanguage" fab small flat>
        <v-icon>flag</v-icon>{{ this.$i18n.locale }}
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid >
        <v-layout justify-center align-center>
          <router-view v-if="isAuthenticated"></router-view>
            <div v-else>
              <div>
                <h2>{{ $t('startSessionWith') }}</h2>
                <div>
                  <v-btn flat @click="login('google')">
                    <v-icon>mdi-google</v-icon>
                  </v-btn>
                  <v-btn flat @click="login('twitter')">
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn flat @click="login('facebook')">
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn flat @click="login('github')">
                    <v-icon>mdi-github-box</v-icon>
                  </v-btn>
                  <v-btn flat @click="login('linkedin')">
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app fixed>
      <span>&copy; 2017 - Somos Cerveceros</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'user'])
  },
  methods: {
    ...mapActions(['login', 'logout', 'updateMetadata']),
    switchLanguage() {
      if (this.$i18n.locale == 'es') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'es'
      }
    }
  },
  data() {
    return {
      drawer: null,
      menu: [
        { to: { name: 'dashboard' }, icon: 'mdi-view-dashboard' },
        {
          to: { name: 'configuration' },
          icon: 'mdi-settings',
          children: [
            { to: { name: 'gear' }, icon: 'mdi-pot' },
            { to: { name: 'water' }, icon: 'mdi-water' },
            { to: { name: 'devices' }, icon: 'mdi-desktop-classic' }
          ]
        },
        {
          to: { name: 'tools' },
          icon: 'build',
          children: [{ to: { name: 'calculator' }, icon: 'mdi-calculator' }]
        },
        { to: { name: 'notifications' }, icon: 'mdi-message', badge: 2 }
      ]
    }
  },
  mounted() {
    this.updateMetadata()
  }
}
</script>

<style>
</style>
