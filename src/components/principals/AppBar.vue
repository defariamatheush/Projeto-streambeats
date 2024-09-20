<template>
    <div>
        <v-app-bar :elevation="10" density="comfortable" theme="" color="black">
            <template v-slot:prepend>
                <v-btn id="btn_navigation_drawer" icon   density="compact" size="large" :variant="overlay ? 'tonal' : 'text'"  @click="overlay = !overlay">
                    <v-icon icon="mdi-menu" size="small"></v-icon>
                </v-btn>
                <v-img style="cursor: pointer;" @click="this.$router.push({path:'/'})" src="../../assets/logo-branca.png" width="100"></v-img>
            </template>
            <template v-slot:append>
                <v-list-item append-avatar="https://randomuser.me/api/portraits/women/85.jpg" :variant="overlayProfile ? 'tonal' : 'text'" @click="overlayProfile = !overlayProfile" class="text-body-2" title="Sandra Adams">
                    <template v-slot:subtitle>
                        <div class="ml-auto">
                            <span>R$85,00</span>
                        </div>
                    </template>
                </v-list-item>
            </template>
        </v-app-bar>
        <NavigationDrawer  @closeDrawer="closeDrawer"  :drawer="overlay"/>
        <NavigationDrawerProfile @closeDrawer="closeDrawerProfile" :drawer="overlayProfile"/>
    </div>
</template>

<script>
import NavigationDrawer from "./NavigationDrawer.vue"
import NavigationDrawerProfile from "./NavigationDrawerProfile.vue"
export default ({
    data() {
        return{
            overlay: false,
            overlayProfile:false
        }
    },
    components:{
        NavigationDrawer,
        NavigationDrawerProfile
    },
    methods:{
      closeDrawerProfile(drawer){
        this.overlayProfile = drawer
      },
      closeDrawer(drawer){
        this.overlay = drawer
      }
    }
})
</script>

<style>
.v-navigation-drawer {
z-index: 999999 !important;
}
</style>
