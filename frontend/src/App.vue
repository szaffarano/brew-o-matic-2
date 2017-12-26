<template>
  <v-app id="bom2" dark>

    <v-navigation-drawer clipped fixed v-model="drawer" app v-if="isAuthenticated">
      <v-list dense >
        <span v-for="m in menu" :key="m.label">
          <span v-if="m.children">
            <v-list-group>
              <v-list-tile slot="item">
                <v-list-tile-action>
                  <v-icon>{{ m.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ m.label }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile v-for="i in m.children" v-bind:key="i.label" :to="i.to">
                  <v-list-tile-content>
                      <v-list-tile-title>{{ i.label }}</v-list-tile-title>
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
                <v-icon>{{ m.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ m.label }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </span>
        </span>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Brew o Matic 2</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left offset-y v-if="isAuthenticated">
        <v-btn icon slot="activator" dark>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-card>
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon dark>account_circle</v-icon>
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
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view v-if="isAuthenticated"></router-view>
            <div v-else>
              <div>
                <h2>Iniciar sesión con</h2>
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
    ...mapActions(['login', 'logout'])
  },
  data() {
    return {
      drawer: null,
      menu: [
        { to: { name: 'dashboard' }, label: 'Dashboard', icon: 'mdi-view-dashboard' },
        {
          to: { name: 'configuration' },
          label: 'Configuration',
          icon: 'mdi-settings',
          children: [
            { to: { name: 'gear' }, label: 'Gear', icon: 'mdi-pot' },
            { to: { name: 'water' }, label: 'Water', icon: 'mdi-water' },
            { to: { name: 'devices' }, label: 'Devices', icon: 'mdi-desktop-classic' }
          ]
        },
        {
          to: { name: 'tools' },
          label: 'Tools',
          icon: 'build',
          children: [{ to: { name: 'calculator' }, label: 'Calculator', icon: 'mdi-calculator' }]
        },
        { to: { name: 'notifications' }, label: 'Notifications', icon: 'mdi-message' }
      ]
    }
  },
  mounted() {
    this.$store.dispatch('updateMetadata')
  }
}
</script>

<style>
</style>
