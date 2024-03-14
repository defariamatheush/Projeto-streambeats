<template>
    <v-navigation-drawer class="black" theme="dark" absolute permanent>
        <v-list color="transparent" class="mt-2" nav>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" subtitle="sandra_a88@gmailcom" class="text-body-1" title="Sandra Adams"  > 
            </v-list-item>
            <v-divider class="ma-3"></v-divider>
            <v-list-item link to="/home">
                <template v-slot:prepend>
                    <v-icon icon="$vuetify"></v-icon>
                </template>
                <v-list-item-title class="text-body-1">Home</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/home">
                <template v-slot:prepend>
                    <v-icon icon="$vuetify"></v-icon>
                </template>
                <v-list-item-title class="text-body-1">Home</v-list-item-title>
            </v-list-item>
        </v-list>
        <template v-slot:append>
            <v-divider class="ma-5"></v-divider>
            <div class="ma-5 mb-5" >
                <v-btn theme="light" block  class="justify-start text-black" prepend-icon="mdi-logout">
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
