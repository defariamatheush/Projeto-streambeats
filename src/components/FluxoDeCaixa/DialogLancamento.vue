<template>
  <div>
    <v-dialog v-model="dialogLancamento" persistent>
      <v-card :width="900" :height="500" class="mx-auto">
        <template v-slot:title>
          <span>
            Novo Lançamento
          </span>
        </template>
        <template v-slot:append>
          <div class="d-flex flex-row">
            <div class="w-100 my-auto">
              <v-menu prepend-icon="mdi-account">
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="black"
                    v-bind="props"
                    :append-icon="cliqueMenu == true ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    density="comfortable"
                    @close-on-content-click = "cliqueMenu = false"
                    @click="cliqueMenu = !cliqueMenu"
                    v-model="cliqueMenu"
                    class="text-caption"
                  >
                      Activator slot
                  </v-btn>
                </template>
                <v-list density="compact">
                  <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :value="index"
                    @click="cliqueMenu = false"
                  >
                    <v-list-item-title>
                      <v-icon size="small" :icon="item.text == 'Receita' ? 'mdi-currency-usd' : 'mdi-currency-usd-off'">
                      </v-icon>
                      <span class="text-caption">
                        {{ item.text }}
                      </span>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            <div class="ml-5">
              <v-btn @click="closeDialog()" icon="mdi-close" variant="tonal" hover rounded size="x-small"></v-btn>
            </div>
          </div>
        </template>
        <v-card-text class="mt-5">
          <v-row>
            <v-col>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field label="Descrição*" variant="outlined" density="compact">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <div class="d-flex flex-row">
                <v-autocomplete
                  label="Fornecedor"
                  variant="outlined"
                  density="compact"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  class="rounded-e-sm"
                ></v-autocomplete>
                <div class="">
                  <v-btn icon="mdi-plus" color="black" variant="flat" class="rounded-s-sm rounded-e-lg" hover size="small"></v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4" class="py-0">
              <v-text-field label="Valor*" variant="outlined" density="compact">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="py-0">
              <v-text-field label="Data de Vencimento*" variant="outlined" density="compact">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="py-0">
              <v-select
                prepend-inner-icon="mdi-cash-100"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined"
                density="compact"
                size="sm"
              >
                <template v-slot:label>
                    <span class="text-caption">Formas de Pagamento</span>
                </template>
              </v-select>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default{
    data() {
      return{
        dialogLancamento:false,
        items: [
          {
            text: 'Receita',
            value: 1,
            uuid: 'c54b5ee6-5209-4ccf-8fbf-74b98eb29c6b'
          },
          {
            text: 'Despesa',
            value: 2,
            uuid: '37e1d337-5c79-4aa2-846d-79347d3c1b7e'
          }
        ],
      }
    },
    props:['dialog'],
    watch:{
    },
    created(){
      if(this.dialog){
        this.dialogLancamento = this.dialog
      }
    }
  }
</script>
