<template>

<v-container>
  <v-snackbar
      :timeout="3000"
      :color="appStatus.error ? 'error' : 'success'"
      :multi-line="false"
      :vertical="false"
      v-model="showStatus"
   >
    {{ $t(appStatus.message) }}
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
    showStatus: {
      get() {
        return this.appStatus.message
      },
      set(v) {
        if (!v) {
          this.clearAppStatus()
        }
      }
    }
  },
  methods: {
    ...mapActions(['clearAppStatus'])
  }
}
</script>

<style scoped>
</style>
