<template>
    <div class="w-100">
        <v-card>
          <v-card-title>
              <span class="text-h6 font-weight-bold">Meios de Pagamento</span>
          </v-card-title>
          <v-card-text>
              <v-row>
                  <v-col cols="12" md="2">
                      <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="R$" label="Boleto*"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                      <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="R$" label="PIX*"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                      <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="R$" label="Cartão de Débito*"></v-text-field>
                  </v-col>
              </v-row>
              <v-row class="py-0">
                  <v-col cols="12" md="2" class="py-0">
                      <span class="text-body-1">Cartão de Crédito</span>
                      <v-btn @click="pushTaxasCartaoCredito()" variant="tonal" color="success" prepend-icon="mdi-plus" size="small" class="text-overline">
                        <span>
                          Adicionar Taxa
                        </span>
                      </v-btn>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-row class="text-start">
                      <v-col cols="12" md="2">
                        <span>%</span>
                      </v-col>
                      <v-col cols="12" md="2">
                        <span>R$</span>
                      </v-col>
                      <v-col cols="12" md="2">
                        <span>Descrição</span>
                      </v-col>
                      <v-col cols="12" md="3">
                        <span>Ações</span>
                      </v-col>
                    </v-row>
                    <v-row v-for="(item,index) in listCartaoDeCredito" :key="item.id">
                      <v-col cols="12" md="2" class="py-0">
                        <v-text-field density="compact" append-outer-icon="add" v-model="item.percent" class="w-100" variant="outlined" prefix="%"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" class="py-0">
                        <v-text-field density="compact" append-outer-icon="add" v-model="item.moneyValue" class="w-100" variant="outlined" prefix="R$"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" class="py-0">
                        <v-text-field density="compact" append-outer-icon="add" v-model="item.desc" class="w-100" variant="outlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" :md="item.parcelado ? 3 : 1" class="py-0">
                        <div class="d-flex flex-row">
                          <div>
                            <v-switch align="center" @change="item.parcelado" v-model="item.parcelado" color="success" :label="item.parcelado ? 'Parcelado' : 'Á vista'"></v-switch>
                          </div>
                          <v-fade-transition mode="in-out">
                            <div v-if="item.parcelado" class="d-flex flex-row">
                              <div class="ml-3" >
                                <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="N°" label="De"></v-text-field>
                              </div>
                              <div class="ml-3">
                                <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="N°" label="Até"></v-text-field>
                              </div>
                            </div>
                          </v-fade-transition>
                        </div>
                      </v-col>
                      <v-col cols="12" md="1">
                        <v-btn @click="removerTaxa(index)" icon="mdi-minus" size="x-small" color="error" rounded="lg"></v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
              </v-row>
          </v-card-text>
        </v-card>
        <v-card class="mt-5">
          <v-card-title>
              <span class="text-h6 font-weight-bold">Nota Fiscal</span>
          </v-card-title>
          <v-card-text>
              <v-row>
                  <v-col cols="12" md="2">
                      <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="R$" label="Valor*"></v-text-field>
                  </v-col>
              </v-row>
          </v-card-text>
        </v-card>
        <v-card class="mt-5">
          <v-card-title>
              <span class="text-h6 font-weight-bold">Antecipação de Recebíveis</span>
          </v-card-title>
          <v-card-text>
              <v-row>
                  <v-col cols="12" md="2">
                      <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="R$" label="Boleto*"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                      <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="R$" label="Cartão de Crédito*"></v-text-field>
                  </v-col>
              </v-row>
          </v-card-text>
        </v-card>
        <v-card class="mt-5">
          <v-card-title>
              <span class="text-h6 font-weight-bold">Análise de Crédito Completa</span>
          </v-card-title>
          <v-card-text>
              <v-row>
                  <v-col cols="12" md="2">
                      <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="R$" label="PJ*"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                      <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="R$" label="PF*"></v-text-field>
                  </v-col>
              </v-row>
          </v-card-text>
        </v-card>
        <v-card class="mt-5">
          <v-card-title>
              <span class="text-h6 font-weight-bold">Análise de Crédito Completa</span>
          </v-card-title>
          <v-card-text>
              <v-row>
                  <v-col cols="12" md="2">
                      <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="R$" label="PJ*"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                      <v-text-field density="compact" append-outer-icon="add" class="w-100" variant="outlined" prefix="R$" label="PF*"></v-text-field>
                  </v-col>
              </v-row>
          </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default{
    data(){
        return{
          parcelado_avista:false,
          listCartaoDeCredito:[],
          valoresCartao:[],
          estruturalistaTaxaCartaoCredito: {
            id:0,
            percent:0,
            moneyValue:0,
            desc:'',
            de:0,
            ate:0,
            parcelado:false,
          }
        }
    },
    methods:{
      removerTaxa(index) {
        this.listCartaoDeCredito.splice(index, 1)
      },
      pushTaxasCartaoCredito() {
        // Incrementar o ID para garantir que cada item tenha um ID único
        this.estruturalistaTaxaCartaoCredito.id = this.listCartaoDeCredito.length + 1
        // Adicionar uma cópia profunda do objeto
        this.listCartaoDeCredito.push(this.estruturalistaTaxaCartaoCredito);

        // Reiniciar o objeto para garantir que não reutilize os mesmos valores
        this.estruturalistaTaxaCartaoCredito = {
          id: this.estruturalistaTaxaCartaoCredito.id, // Mantém o ID atualizado
          percent: 0,
          moneyValue: 0,
          desc: '',
          de: 0,
          ate: 0,
          parcelado: false,
        };
      },
    }
}
</script>
