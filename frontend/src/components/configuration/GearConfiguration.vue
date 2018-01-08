<template>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap v-if="userSettings.defaultValues && userSettingsMetadata">
      <v-flex xs12>
        <div class="text-xs-center">
          <h2 class="headline">Valores por defecto en tus recetas</h2>
        </div>
      </v-flex>
      <v-flex xl3 lg3 md4 sm5 xs6 v-for="(v, k) in userSettingsMetadata" :key="k">
        <v-card class="pl-3 pr-3 pt-2">
          <span v-if="v.type == 'Number'">
              <v-text-field
                :label="$t(k)"
                v-model="userSettings.defaultValues[k]"
                :required="false"></v-text-field>
          </span>
          <span v-if="v.type == 'String'">
            <v-text-field
              :label="$t(k)"
              v-model="userSettings.defaultValues[k]"
              :required="false"></v-text-field>
          </span>
          <span v-if="v.type == 'Boolean'">&nbsp;
            <v-switch
              :label="$t(k)"
              v-model="userSettings.defaultValues[k]"></v-switch>
          </span>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['userSettings', 'userSettingsMetadata'])
  },
  methods: {
    ...mapActions(['getUserSettings', 'getUserSettingsMetadata'])
  },
  mounted() {
    this.getUserSettings()
    this.getUserSettingsMetadata()
  }
}
</script>

<style scoped>
  .card {
    height: 100% !important;
  }
</style>
