<template>
<b-container fluid>

  <b-container>
    <b-navbar toggleable="md" type="dark" variant="info" class="rounded">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>Brew o Matic</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
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

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </b-container>

  <b-container>
    <router-view></router-view>
  </b-container>

  <b-container>
    <footer class="footer">
      <b-container>
        <b-row class="text-muted">
          <b-col class="text-left">Brew o Matic 2</b-col>
          <b-col class="text-right" cols="9">Somos Cerveceros</b-col>
        </b-row>
      </b-container>
    </footer>
  </b-container>

</b-container>
</template>

<script>
export default {
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
  }
}
</script>

<style scoped>
.navbar {
  margin-bottom: 10px;
}
</style>
