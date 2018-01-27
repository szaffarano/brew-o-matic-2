<template>
    <v-container grid-list-md text-xs-center>
      <v-form v-model="valid" ref="form">
        <v-layout row wrap v-if="userSettingsMetadata && userSettings.defaultValues">
          <v-flex xs12>
            <div class="text-xs-center">
              <h2 class="headline">{{ $t('gear-config.title')}}</h2>
            </div>
          </v-flex>
            <v-flex xl3 lg3 md4 sm5 xs6 v-for="(v, k) in userSettingsMetadata" :key="k">
              <v-card class="pl-3 pr-3 pt-2">
                <dynamic-field
                  :label="label(k)"
                  :field="v"
                  v-model="userSettings.defaultValues[k]">
                </dynamic-field>
              </v-card>
            </v-flex>
        </v-layout>
        <v-layout>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            @click="saveUserSettings(userSettings)"
            color="primary">{{ $t('save') }}
          </v-btn>
        </v-layout>
        <app-messages></app-messages>
      </v-form>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DynamicField from '../DynamicField'

export default {
  data() {
    return {
      valid: false,
    }
  },
  computed: {
    ...mapGetters(['userSettings', 'userSettingsMetadata', 'appStatus'])
  },
  methods: {
    ...mapActions([
      'getUserSettings',
      'getUserSettingsMetadata',
      'saveUserSettings'
    ]),
    label(name) {
      return this.$t(`settings.defaultValues.${name}`)
    }
  },
  mounted() {
    this.getUserSettings()
    this.getUserSettingsMetadata()
  },
  components: {
    DynamicField
  }
}
</script>

<style scoped>
  .card {
    height: 100% !important;
  }
</style>
