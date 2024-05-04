<template>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" >
            <v-skeleton-loader :loading="carregamento" type="chip">
                <v-select label="Período" variant="outlined" density="compact">
                    <template v-slot:no-data>
                        <span class="px-4">Nenhuma data encontrada</span>
                    </template>
                </v-select>
            </v-skeleton-loader>
        </v-col>
        <v-col cols="12" sm="3">
            <v-skeleton-loader :loading="carregamento" type="button">
                <v-btn @click="dialogCadastroLancamento = true" :rounded="100" prepend-icon="mdi-plus" variant="outlined" color="black">
                    Cadastrar lançamento
                </v-btn>
                <DialogCadastroLancamentoVue @fecharDialogCadastroLancamento="dialogCadastroLancamento = false" v-model="dialogCadastroLancamento" />
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
import DialogCadastroLancamentoVue from '../components/lancamentos/DialogCadastroLancamento.vue'
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
                tipo:'Conta de luz',
                descricao:'Conta de luz - Barra do sul',
                valor:120.00
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
        DialogCadastroLancamentoVue
    }
  }
  </script>
  