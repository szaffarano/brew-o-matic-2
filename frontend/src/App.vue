<template>
<div>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand>Brew o Matic</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <span v-for="m in menu" :key="m.label">
          <b-nav-item>
            <router-link :to="m.to">{{ m.label }}</router-link>
          </b-nav-item>
        </span>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <router-view></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { to: { name: 'home' }, label: 'Home' },
        { to: { name: 'detail', params: { id: 1 } }, label: 'Detail' },
        { to: { name: 'post' }, label: 'Post' }
      ]
    }
  }
}
</script>

<style>
</style>
