<template>
    <div>
        <v-app-bar :elevation="10" density="comfortable" theme="dark" color="pink-accent-3">
            <template v-slot:prepend>
                <v-btn id="btn_navigation_drawer" :min-width="25" rounded="lg" density="comfortable" size="large" variant="outlined"  @click="overlay = !overlay">
                        <v-icon icon="mdi-menu" size="large"></v-icon>
                </v-btn>
            </template>        
            <v-app-bar-title to="/">
                <div class="d-flex">
                    <h6 class="text-h6 text-white font-weight-light">CEM</h6>
                    <h5 class="text-h5 text-white font-italic font-weight-black">Conto</h5>
                </div>
            </v-app-bar-title>
        </v-app-bar>
        <v-overlay activator="#btn_navigation_drawer">
            <v-layout>
                <NavigationDrawer/>
            <v-main class="h-screen"></v-main>
            </v-layout>
        </v-overlay>
    </div>
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
