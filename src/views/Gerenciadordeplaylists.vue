<template>
    <v-container>
        <v-row justify="space-around">
            <v-col cols="auto">
                <v-chip-group selected-class="text-primary" multiple mandatory>
                <v-chip v-for="tag in tags" :key="tag[1]">
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
        <ListaMusicasPesquisadas />
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