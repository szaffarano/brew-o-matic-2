<template>
  <v-container>
    <v-btn fab bottom right color="pink" fixed @click.stop="showForm = true">
      <v-icon>add</v-icon>
    </v-btn>

    <v-dialog v-model="showForm">
      <v-card>
        <v-card-title class="grey lighten-4 py-4 title">
          {{ $t('new-recipe-title')}}
        </v-card-title>

        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-expansion-panel>
                <v-expansion-panel-content v-for="tab in tabs" :key="tab">
                  <div slot="header">{{ tab }}</div>
                  <div>{{ tab }}</div>
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
export default {
  data: () => ({
    showForm: false,
    tabs: [
      'Receta',
      'Agua',
      'Macerado',
      'Hervido',
      'Fermentación',
      'Embotellado',
      'Bitácora',
      'Colaboradores',
      'TILT',
      'Tiempos'
    ]
  })
}
</script>

<style scoped>

</style>

