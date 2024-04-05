<template>
  <v-container>
    <h1 class="text-body-1">Teste para card de streamer online</h1>
    <v-divider class="ma-5"></v-divider>
    <v-row>
      <v-col cols="12" sm="3" >
        <CardStreamer />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

//import AppBar from '@/components/principals/AppBar'
import CardStreamer from '@/components/CardStreamer.vue';
export default {
  name: 'HomeView',
  components: {
    //AppBar
    CardStreamer
  }
}
</script>
