<template>
    <v-app-bar :elevation="10" density="comfortable" theme="dark">
        <template v-slot:prepend>
            <v-btn id="btn_navigation_drawer" :min-width="25" rounded="lg" density="comfortable" size="large" variant="outlined"  @click="overlay = !overlay">
                    <v-icon icon="mdi-menu" size="large"></v-icon>
            </v-btn>
        </template>        
        <v-app-bar-title>Gerenciador de arquivos</v-app-bar-title>
    </v-app-bar>
    <v-overlay activator="#btn_navigation_drawer">
        <v-layout>
            <NavigationDrawer/>
        <v-main class="h-screen"></v-main>
        </v-layout>
    </v-overlay>'
</template>

<script>
import NavigationDrawer from "./NavigationDrawer.vue"

export default ({
    data() {
        return{
            overlay: false
        }
    },
    components:{
        NavigationDrawer
    }
})
</script>

<style>
.v-navigation-drawer {
z-index: 999999 !important;
}
</style>
