<template>
    <v-dialog v-model="dialogCadastroLancamento" width="800">
      <v-card prepend-icon="mdi-cash-plus" title="Cadastro de lançamento" :subtitle="FormatMes">
        <v-card-text>
            <v-row>
                <v-col cols="12" sm="4">
                    <v-skeleton-loader type="chip">
                        <v-select v-model="formCadastroParcelas.tipoLancamento" label="Tipo de lançamento" variant="outlined" density="compact">
                            <template v-slot:no-data>
                                <span class="px-4">Nenhuma data encontrada</span>
                            </template>
                        </v-select>
                    </v-skeleton-loader>
                </v-col>
                <v-col cols="12" sm="8">
                    <v-text-field v-model="formCadastroParcelas.descLancamento" label="Descrição" variant="outlined" density="compact"></v-text-field>
                </v-col>
            </v-row>    
            <v-row class="my-sm-n5">
                <v-col cols="12" sm="4">
                    <v-text-field min="1" prefix="R$" v-model.number="valorLancamento" label="Valor" variant="outlined" density="compact"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-skeleton-loader type="chip">
                        <v-select label="Mês do lançamento" v-model="formCadastroParcelas.mes" :items="meses" item-title="mes" item-value="value" variant="outlined" density="compact">
                            <template v-slot:no-data>
                                <span class="px-4">Nenhuma data encontrada</span>
                            </template>
                        </v-select>
                    </v-skeleton-loader>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-text-field type="number" maxlength="2" min="1" max="48" minLength="1" v-model.number="formCadastroParcelas.parcelasLancamento" label="Número de parcelas" variant="outlined" density="compact"></v-text-field>
                </v-col>
            </v-row>      
        </v-card-text>
        <v-card-actions class="justify-end">
            <v-btn
                variant="outlined"
                text="Fechar"
                color="error"
                @click="$emit('fecharDialogCadastroLancamento',false)"
            ></v-btn>
            <v-btn
                variant="outlined"
                text="Cadastrar"
                color="success"
                @click="CadastrarLancamento()"
            ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
 //import axios from 'axios';
  //import AppBar from '@/components/principals/AppBar'
  export default {
    name: 'DialogCadastroLancamento',
    props:{

    },
    data(){
        return{
            mes:'04-2024',
            valorLancamento:0,
            formCadastroParcelas:{
                mes:0,
                descLancamento:'',
                tipoLancamento:0,
                valorLancamento:0,
                parcelasLancamento:0
            },
            meses:[
                {mes:'Janeiro',value:1},
                {mes:'Fevereiro',value:2},
                {mes:'Março',value:3},
                {mes:'Abril',value:4},
                {mes:'Maio',value:5},
                {mes:'Junho',value:6},
                {mes:'Julho',value:7},
                {mes:'Agosto',value:8},
                {mes:'Setembro',value:9},
                {mes:'Outubro',value:10},
                {mes:'Novembro',value:11},
                {mes:'Dezembro',value:12}
            ]
        }
    },
    mounted(){

    },
    methods:{
        CadastrarLancamento(){

        }
    },
    computed:{
        FormatMes(){
            return 'Lançamento para o mês 04-2024'
        }
    },
    components: {
    }
  }
</script>