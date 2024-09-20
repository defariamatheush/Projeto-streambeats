<template>
  <div class="w-100 h-100">
    <v-row>
      <v-col cols="12" md="3">
        <v-card hover variant="flat" style="background-color: #E0FF32" class="text-black" title="Clientes" prepend-icon="mdi-account-group">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card class="bg-white" variant="flat">
                  <v-card-text class="d-flex">
                    <div class="mx-auto flex-column">
                      <div align="start">
                        <div>
                          <span class="text-body-1">Ativos</span>
                        </div>
                      </div>
                      <div align="center">
                        <span class="text-body-2 font-weight-bold">5</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="flat" class="bg-white">
                  <v-card-text class="d-flex">
                    <div class="mx-auto flex-column">
                      <div align="start">
                        <div>
                          <span class="text-body-2">Inadimplentes</span>
                        </div>
                      </div>
                      <div align="center">
                        <span class="text-body-1 font-weight-bold">1</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card hover variant="flat" style="background-color: #E0FF32" title="Faturamento" prepend-icon="mdi-finance">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card variant="flat" class="bg-white">
                  <v-card-text class="d-flex">
                    <div class="mx-auto flex-column">
                      <div align="start">
                        <div>
                          <v-icon size="small" icon="mdi-arrow-down-bold"></v-icon>
                          <span class="text-body-1">Cobranças</span>
                        </div>
                      </div>
                      <div align="end">
                        <span class="text-body-2 font-weight-bold">R$ 50.000,00</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="flat" class="bg-white">
                  <v-card-text class="d-flex">
                    <div class="mx-auto flex-column">
                      <div align="start">
                        <div>
                          <v-icon size="small" icon="mdi-arrow-up-bold"></v-icon>
                          <span class="text-body-1">Despesas</span>
                        </div>
                      </div>
                      <div align="end">
                        <span class="text-body-2 font-weight-bold">R$ 25.000,00</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card hover variant="flat" prepend-icon="mdi-cash-100" style="background-color: #E0FF32" title="Cobranças">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <v-card variant="flat" class="bg-white">
                  <v-card-text class="d-flex">
                    <div class="mx-auto flex-column">
                      <div align="start">
                        <div>
                          <span class="text-body-1">Pagamento Efetuado</span>
                        </div>
                      </div>
                      <div align="center">
                        <span class="text-body-2 font-weight-bold">R$ 25.000,00</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card variant="flat" class="bg-white">
                  <v-card-text class="d-flex">
                    <div class="mx-auto flex-column">
                      <div align="start">
                        <div>
                          <span class="text-body-1">Aguardando Pagamento</span>
                        </div>
                      </div>
                      <div align="center">
                        <span class="text-body-2 font-weight-bold">R$ 25.000,00</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card variant="flat" class="bg-white">
                  <v-card-text class="d-flex">
                    <div class="mx-auto flex-column">
                      <div align="start">
                        <div>
                          <span class="text-body-1">Vencidas</span>
                        </div>
                      </div>
                      <div align="center">
                        <span class="text-body-2 font-weight-bold">R$ 25.000,00</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//import axios from 'axios';
//import AppBar from '@/components/principals/AppBar'
export default {
  name: 'HomeView',
    methods:{
    },
  components: {
    //AppBar
    
  }
}
</script>
