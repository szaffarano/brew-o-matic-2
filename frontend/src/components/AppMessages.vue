<template>

<v-container>
  <v-snackbar
      :timeout="3000"
      :color="snackColor"
      :multi-line="true"
      :vertical="false"
      v-model="showStatus"
  >
  <div>
    <p v-for="item in appStatus" v-bind:key="item.message">
      {{ $t(item.message, getProperties(item)) }}
    </p>
  </div>
  <v-btn flat @click.native="clearAppStatus">{{ $t('close') }}</v-btn>
  </v-snackbar>
</v-container>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['appStatus']),
    snackColor() {
      const hasError = this.appStatus.find(m => {
        return m.path ? true : false
      })
      return hasError ? 'error' : 'success'
    },
    showStatus: {
      get() {
        return this.appStatus.length > 0
      },
      set(v) {
        if (!v) {
          this.clearAppStatus()
        }
      }
    }
  },
  methods: {
    ...mapActions(['clearAppStatus']),
    getProperties(i) {
      if (i.path) {
        i.properties.path = this.$t(i.path)
      }
      return i.properties
    }
  }
}
</script>

<style scoped>
</style>
