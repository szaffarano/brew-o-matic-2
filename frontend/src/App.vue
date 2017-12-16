<template>
<b-container class="pl-0 pr-0">

  <b-container fluid class="pl-0 pr-0">
    <b-navbar toggleable="md" type="dark" variant="dark" class="rounded">

      <b-navbar-toggle v-if="isAuthenticated" target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>Brew o Matic</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav v-if="isAuthenticated">
          <span v-for="m in menu" :key="m.label">
            <span v-if="m.children">
              <b-nav-item-dropdown :text="m.label" right>
                <span v-for="sm in m.children" :key="sm.label">
                  <b-dropdown-item :to="sm.to">{{ sm.label }}</b-dropdown-item>
                </span>
              </b-nav-item-dropdown>
            </span>
            <span v-else>
              <b-nav-item :exact="true" :to="m.to">{{ m.label }}</b-nav-item>
            </span>
          </span>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="isAuthenticated">
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>{{ user.name }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </b-container>

  <b-container>
    <router-view v-if="isAuthenticated"></router-view>
    <div v-else>
      <div>
        <h2>Iniciar sesión con</h2>
        <div>
          <a href="#" @click="login('google')" class="zocial google">Google</a>
          <a href="#" @click="login('twitter')" class="zocial twitter">Twitter</a>
          <a href="#" @click="login('facebook')" class="zocial facebook">Facebook</a>
          <a href="#" @click="login('github')" class="zocial github">Github</a>
          <a href="#" @click="login('linkedin')" class="zocial linkedin">LinkedIn</a>
        </div>
      </div>
    </div>
  </b-container>

  <b-container>
    <footer class="footer">
      <b-container fluid class="pl-0 pr-0">
        <b-row class="text-muted">
          <b-col class="text-left">BoM 2</b-col>
          <b-col class="text-right" cols="9">Somos Cerveceros</b-col>
        </b-row>
      </b-container>
    </footer>
  </b-container>

</b-container>
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
      menu: [
        { to: { name: 'dashboard' }, label: 'Dashboard' },
        {
          to: { name: 'configuration' },
          label: 'Configuration',
          children: [
            { to: { name: 'gear' }, label: 'Gear' },
            { to: { name: 'water' }, label: 'Water' },
            { to: { name: 'devices' }, label: 'Devices' }
          ]
        },
        {
          to: { name: 'tools' },
          label: 'Tools',
          children: [{ to: { name: 'calculator' }, label: 'Calculator' }]
        },
        { to: { name: 'notifications' }, label: 'Notifications' }
      ]
    }
  },
  mounted() {
    this.$store.dispatch('updateMetadata')
  }
}
</script>

<style scoped>
.navbar {
  margin-bottom: 10px;
}
a {
    margin-bottom: 5px;
}
</style>
