<template>
  <v-app>
    <AppBar/>
    <v-content>
      <v-main>
        <v-container class="fill-height" fluid>
          <router-view/>
        </v-container>
      </v-main>
    </v-content>  
  </v-app>
</template>

<script>
import AppBar from './components/principals/AppBar.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    AppBar
  }
}
</script>
<!--

<style>
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>

-->

