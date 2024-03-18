<template>
  <v-container>
    <h1 class="text-body-1">Teste para card de streamer online</h1>
    <v-divider class="ma-5"></v-divider>
    <v-row>
      <v-col cols="12" sm="2" >
        <v-card variant="tonal" prepend-avatar="" title="Matheus" subtitle="Jogando League of Legends">
          <template v-slot:prepend>
            <v-avatar color="blue-darken-2">
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-avatar>
          </template>
          <template v-slot:append>
            <v-chip class="mb-5" prepend-icon="mdi-circle-medium" color="red" variant="flat" density="comfortable" size="small" label >
              Streaming
            </v-chip>
          </template>
          <v-card-item class="mb-2">

            <v-card-title>
              <h4 prepend-icon="$vuetify" class="text-body-1 text-black">Escutando: Chemical - Post Malone</h4>
            </v-card-title>
            <template v-slot:prepend>
              <v-icon icon="mdi-music">
              
              </v-icon>
            </template>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

//import AppBar from '@/components/principals/AppBar'
export default {
  name: 'HomeView',
  components: {
    //AppBar
  }
}
</script>
