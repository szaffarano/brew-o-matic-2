<template>
    <v-container grid-list-md text-xs-center>
      <v-form v-model="valid" ref="form">
        <v-layout row wrap v-if="userSettingsMetadata && userSettings.defaultValues">
          <v-flex xs12>
            <div class="text-xs-center">
              <h2 class="headline">Valores por defecto en tus recetas</h2>
            </div>
          </v-flex>
            <v-flex xl3 lg3 md4 sm5 xs6 v-for="(v, k) in userSettingsMetadata" :key="k">
              <v-card class="pl-3 pr-3 pt-2">
                <span v-if="v.type == 'Number'">
                    <v-text-field
                      :label="label(k)"
                      v-model="userSettings.defaultValues[k]"
                      :rules="rulesFor(label(k), v)"
                    ></v-text-field>
                </span>
                <span v-if="v.type == 'String'">
                  <v-text-field
                    :label="label(k)"
                    v-model="userSettings.defaultValues[k]"
                    :rules="rulesFor(label(k), v)"
                  ></v-text-field>
                </span>
                <span v-if="v.type == 'Boolean'">&nbsp;
                  <v-switch
                    :label="label(k)"
                    v-model="userSettings.defaultValues[k]"
                    :rules="rulesFor(label(k), v)"
                  ></v-switch>
                </span>
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

export default {
  data() {
    return {
      valid: false,
      validatorFunctions: {
        String: name => v => {
          return true
        },
        Boolean: name => v => {
          return true
        },
        Number: name => v => {
          return (
            !v ||
            !Number.isNaN(Number.parseInt(v)) ||
            !Number.isNaN(Number.parseFloat(v)) ||
            this.$t('mongoose-Number', { path: name })
          )
        },
        required: (name, validator) => v => {
          return (
            !!v ||
            v === 0 ||
            this.$t('mongoose-required', { path: name, ...validator })
          )
        },
        min: (name, validator) => v => {
          return (
            !v ||
            v >= validator.min ||
            this.$t('mongoose-min', { path: name, ...validator })
          )
        }
      }
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
    },
    rulesFor(name, field) {
      const validators = []
      validators.push(this.validatorFunctions[field.type](name))
      field.validators.forEach(v => {
        validators.push(this.validatorFunctions[v.type](name, v))
      })
      return validators
    }
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
