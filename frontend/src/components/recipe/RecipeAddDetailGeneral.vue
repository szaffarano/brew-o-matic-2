<template>
  <v-layout row wrap>
    <v-flex xs12>
      <h2 class="subheading border">{{ $t('recipe-add-detail-general') }}</h2>
    </v-flex>
    <v-flex v-bind="flexOptions">
        <v-text-field
          :label="$t('recipe-add-name')"
          v-model="recipe.NAME"
        ></v-text-field>
    </v-flex>
    <v-flex v-bind="flexOptions">
        <v-text-field
          :label="$t('recipe-add-batch-size')"
          v-model="recipe.BATCH_SIZE"
        ></v-text-field>
    </v-flex>
    <v-flex v-bind="flexOptions">
        <v-text-field
          :label="$t('recipe-add-og')"
          v-model="recipe.OG"
        ></v-text-field>
    </v-flex>
    <v-flex v-bind="flexOptions">
        <v-text-field
          :label="$t('recipe-add-ibu')"
          v-model="recipe.CALCIBU"
        ></v-text-field>
    </v-flex>
    <v-flex v-bind="flexOptions">
        <v-text-field
          :label="$t('recipe-add-balance')"
          v-model="recipe.BV"
        ></v-text-field>
    </v-flex>
    <v-flex v-bind="flexOptions">
        <v-select
          :items="dataStyles"
          v-model="recipe.STYLE"
          item-text="name"
          :loading="!dataStyles || dataStyles.length == 0"
          :label="$t('recipe-add-style')"
          autocomplete
        ></v-select>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['dataStyles'])
  },
  methods: {
    ...mapActions(['getStyles'])
  },
  data: () => ({
    recipe: {},
    flexOptions: {
      xl3: true,
      lg3: true,
      md4: true,
      sm5: true,
      xs6: true,
      class: 'pl-1 pr-1 pt-1 mt-1'
    }
  }),
  mounted() {
    this.getStyles()
  }
}
</script>
<style scoped>

</style>
