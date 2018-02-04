<template>
  <v-container grid-list-sm class="pl-4 pr-4">
    <v-layout row wrap>
      <v-flex xs12>
        <recipe-add-detail-general></recipe-add-detail-general>
      </v-flex>
      <v-flex xs12>
        <recipe-add-detail-fermentables></recipe-add-detail-fermentables>
      </v-flex>
      <v-flex xs12>
        <recipe-add-detail-hops></recipe-add-detail-hops>
      </v-flex>
      <v-flex xs12>
        <recipe-add-detail-yeast></recipe-add-detail-yeast>
      </v-flex>
      <v-flex xs12>
        <recipe-add-detail-miscs></recipe-add-detail-miscs>
      </v-flex>
      <v-flex xs12>
        <recipe-add-detail-other></recipe-add-detail-other>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RecipeAddDetailGeneral from './RecipeAddDetailGeneral'
import RecipeAddDetailFermentables from './RecipeAddDetailFermentables'
import RecipeAddDetailHops from './RecipeAddDetailHops'
import RecipeAddDetailYeast from './RecipeAddDetailYeast'
import RecipeAddDetailMiscs from './RecipeAddDetailMiscs'
import RecipeAddDetailOther from './RecipeAddDetailOther'

export default {
  components: {
    RecipeAddDetailGeneral,
    RecipeAddDetailFermentables,
    RecipeAddDetailHops,
    RecipeAddDetailYeast,
    RecipeAddDetailMiscs,
    RecipeAddDetailOther
  }
}
</script>

<style >
.border {
  border-bottom: 1px solid gray;
}
</style>

