<template>
    <v-navigation-drawer class="black" absolute permanent>
        <v-list color="transparent" class="mt-2">   
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" class="text-body-1" title="Sandra Adams"  > 
                <v-chip prepend-icon="mdi-circle-medium" color="green" variant="flat" density="comfortable" size="small">
                    Online
                </v-chip>
            </v-list-item>
        </v-list>
        <v-list nav>
            <v-divider class="ma-2"></v-divider>
            <v-list-item  variant="outlined" link to="/home">
                <template v-slot:prepend>
                    <v-icon class="text-black" icon="mdi-home"></v-icon>
                </template>
                <v-list-item-title class="text-body-1 text-black">Home</v-list-item-title>
            </v-list-item>
            <v-list-item  variant="outlined" link to="/gerenciarplaylists">
                <template v-slot:prepend>
                    <v-icon class="text-black" icon="mdi-playlist-music"></v-icon>
                </template>
                <v-list-item-title class="text-body-1 text-black">Gerenciar playlists</v-list-item-title>
            </v-list-item>
        </v-list>
        <template v-slot:append>
            <v-divider class="ma-5"></v-divider>
            <div class="ma-5 mb-5" >
                <v-btn theme="dark" block  class="justify-start text-white" prepend-icon="mdi-logout">
                Logout
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
export default({

})
</script>
