<template>
  <v-container>
    <v-btn fab bottom right color="pink" dark fixed @click.stop="showForm = true" class="mb-3">
      <v-icon>add</v-icon>
    </v-btn>

    <v-dialog v-model="showForm" v-if="showForm">
      <v-card>
        <v-card-title class="grey lighten-2 py-4 headline">
          {{ $t('recipe-add-title')}}
        </v-card-title>

        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-expansion-panel>
                <v-expansion-panel-content>
                  <div slot="header" class="title">{{ $t('recipe-add-recipe') }}</div>
                  <recipe-add-detail></recipe-add-detail>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <div slot="header" class="title">{{ $t('recipe-add-water' )}}</div>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <div slot="header" class="title">{{ $t('recipe-add-mash')}}</div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-flex>
          </v-layout>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="showForm = false">{{ $t('cancel') }}</v-btn>
          <v-btn flat @click="showForm = false">{{ $t('save') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import RecipeAddDetail from './RecipeAddDetail'

export default {
  data: () => ({
    showForm: false
  }),
  components: {
    RecipeAddDetail
  }
}
</script>

<style scoped>
</style>

