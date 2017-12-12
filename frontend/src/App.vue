<template>
<div>
  <ul>
    <li v-for="m in menu" :key="m.label">
      <router-link exactActiveClass="active" :to="m.to">{{ m.label }}</router-link>
    </li>
  </ul>
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

<style scoped>
.active {
  font-weight: bold;
}
</style>
