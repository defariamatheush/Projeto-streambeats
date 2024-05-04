<template>
    <v-container>
      <v-row class="py-4">
        <v-col cols="12" sm="3">
            <v-skeleton-loader :loading="carregamento" type="button">
                <v-btn class="" @click="dialogCadastroTipo = true" :rounded="100" prepend-icon="mdi-plus" variant="outlined" color="black">
                    Cadastrar tipo
                </v-btn>
                <DialogCadastroTipoLancamento @fecharDialogCadastroLancamento="dialogCadastroTipo = false" v-model="dialogCadastroTipo" />
            </v-skeleton-loader>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-skeleton-loader :loading="carregamento" type="table">
          <v-row class="mx-auto">
            <v-col cols="12">
                <v-table density="compact">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(lancamento,index) in lancamentos" :key="index">
                            <td>{{ lancamento.tipo }}</td>
                            <td>{{ lancamento.descricao }}</td>
                            <td>R$ {{ lancamento.valor }}</td>
                            <td class="d-flex justify-start">
                                <v-btn class="ma-1" prepend-icon="mdi-delete" variant="flat" color="red" density="compact">Excluir</v-btn>
                                <v-btn class="ma-1" prepend-icon="mdi-file-edit" variant="flat" color="warning" density="compact">Alterar</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
          </v-row>
      </v-skeleton-loader>
    </v-container>
  </template>
  
  <script>
  import DialogCadastroTipoLancamento from '@/components/lancamentos/DialogCadastroTipoLancamento.vue'
  //import axios from 'axios';
  //import AppBar from '@/components/principals/AppBar'
  export default {
    name: 'LancamentosView',
    data(){
        return{
            carregamento:false,
            dialogCadastroLancamento:false,
            dialogCadastroTipo:false,
            lancamentos:[{

            }]
        }
    },
    mounted(){
        this.carregamento = true
        setTimeout(() => {
            this.carregamento = false
        },3000)
    },
    methods:{
    },
    components: {
        DialogCadastroTipoLancamento
    }
  }
  </script>
  