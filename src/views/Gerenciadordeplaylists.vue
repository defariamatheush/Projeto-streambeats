<template>
    <v-container>
        <v-row justify="space-around">
            <v-col cols="auto">
                <v-chip-group selected-class="text-red"  multiple mandatory>
                <v-chip v-for="tag in tags" :key="tag[1]" variant="outlined">
                    {{ tag[0] }}
                </v-chip>
                </v-chip-group>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="4">
                <v-text-field clearable label="Buscar música" prepend-icon="mdi-music" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="auto">
                <v-btn size="large" icon="mdi-magnify" variant="outlined"></v-btn>
            </v-col>
        </v-row>
        <v-row justify="center" class="d-flex justify-center align-content-center w-50" >
            <v-col cols="6">
                <ListaMusicasPesquisadas />
            </v-col>
            <v-col cols="6">
                <ListaMusicasPesquisadas />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ListaMusicasPesquisadas from '@/components/gerenciadordeplaylists/ListaMusicasPesquisadas.vue';
export default {
  name: 'HomeView',
  components: {
    ListaMusicasPesquisadas,
  },
  data: () => ({
      tags: [
        ['Música','track'],
        ['Álbum','album'],
        ['Artista','artist'],
        ['Playlist','playlist'],
        ['Show','show'],
        ['Episódio','episode'],
        ['AudioBook','audiobook'],
      ],
    }),
}
</script>