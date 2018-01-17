<template>
<span>
  <span v-if="field.type == 'Number'">
      <v-text-field
        :label="label"
        :value="value"
        :rules="rules"
        @input="$emit('updateValue', $event)"
      ></v-text-field>
  </span>
  <span v-if="field.type == 'String'">
    <v-text-field
      :label="label"
      :value="value"
      :rules="rules"
      @input="$emit('updateValue', $event)"
    ></v-text-field>
  </span>
  <span v-if="field.type == 'Boolean'">&nbsp;
    <v-checkbox
      :label="label"
      v-model="checkValue"
      :rules="rules"
    ></v-checkbox>
  </span>
</span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    field: {
      type: Object,
      required: true
    },
    value: {
      type: null,
      required: true
    }
  },
  model: {
    prop: 'value',
    event: 'updateValue'
  },
  data() {
    return {
      val: true,
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
    checkValue: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('updateValue', v)
      }
    },
    rules() {
      const validators = []
      validators.push(this.validatorFunctions[this.field.type](this.label))

      if (Object.keys(this.field).includes('validators')) {
        this.field.validators.forEach(v => {
          validators.push(this.validatorFunctions[v.type](this.label, v))
        })
      }

      return validators
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>
