<template>
    <div class="w-100">
        <v-row>
          <div>
            <BreadCrumbs/>
          </div>
          <div class="ml-auto my-auto">
            <v-container class="">
              <v-btn size="small" @click="openDialogLancamento" color="black" prepend-icon="mdi-currency-usd" class="my-auto mr-5">Nova Cobrança</v-btn>
              <v-btn size="small" @click="openDialogLancamento" color="black" prepend-icon="mdi-currency-brl" class="my-auto">Receita/Despesa</v-btn>
            </v-container>
          </div>
        </v-row>
        <v-card variant="flat">
            <template v-slot:prepend>
                <v-btn icon="mdi-filter-outline" variant="tonal" size="small" rounded="lg" @click="nav_filters = !nav_filters"></v-btn>
            </template>
            <v-app>
                <v-navigation-drawer floating width="250" v-model="nav_filters" variant="outlined" class="">
                    <v-list-item class="mt-2">
                        <v-text-field block prepend-inner-icon="mdi-calendar" variant="outlined" class="pt-1" density="compact">
                            <template v-slot:label>
                                <div>
                                    <span class="text-caption">Período</span>
                                </div>
                            </template>
                        </v-text-field>
                    </v-list-item>
                    <v-list-item class="mt-n5">
                        <v-select
                          prepend-inner-icon="mdi-cash-register"
                          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                          variant="outlined"
                          density="compact"
                          size="sm"
                          class="pt-1"
                        >
                        <template v-slot:label>
                            <span class="text-caption">Caixas</span>
                        </template>
                        </v-select>
                    </v-list-item>
                    <v-list-item class="mt-n5">
                        <v-select
                        prepend-inner-icon="mdi-cash"
                            class="pt-1"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                            variant="outlined"
                            density="compact"
                        >
                            <template v-slot:label>
                                <span class="text-caption">Espécies de pagamento</span>
                            </template>
                        </v-select>
                    </v-list-item>
                    <v-list-item class="mt-n5">
                        <v-select
                            prepend-inner-icon="mdi-account"
                            label="Cliente"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                            variant="outlined"
                            density="compact"
                            class="pt-1"
                        >
                        <template v-slot:label>
                            <span class="text-caption">Cliente</span>
                        </template>
                        </v-select>
                    </v-list-item>
                    <v-spacer></v-spacer>
                    <v-list-item class="mt-n5">
                        <v-btn variant="tonal" block rounded="lg" size="small" icon="mdi-magnify"></v-btn>
                    </v-list-item>
                </v-navigation-drawer>
                <v-main>
                <v-data-table v-model:page="pageDataTable" mobile="true" first-icon="mdi-eye" class="pa-5" hover density="comfortable" :items-per-page="itemsPerPage" :items="desserts" :headers="cabecalhos">
                    <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
                        <tr>
                            <template v-for="column in columns" :key="column.key">
                                <td>
                                    <span :class="column.title == 'Caixas' ? 'd-none d-md-none' : '' + 'mr-2 cursor-pointer font-weight-bold'" @click="() => toggleSort(column)">{{ column.title }}</span>
                                    <template v-if="isSorted(column)">
                                    <v-icon :icon="getSortIcon(column)"></v-icon>
                                    </template>
                                    <v-icon v-if="column.removable" icon="$close" @click="() => remove(column.key)"></v-icon>
                                </td>
                            </template>
                        </tr>
                    </template>
                    <template v-slot:item="{ item }">
                        <tr>
                            <td class="d-flex align-center">
                                <v-divider vertical  class="border-opacity-100 mr-5 ml-n4" :thickness="10" :color="item.lan_cor"></v-divider>
                                <span :class="'text-caption'">
                                    {{ item.lan_dt_vencimento }}
                                </span>
                            </td>
                            <td class="">
                                <span class="">
                                    {{ item.lan_dt_vencimento }}
                                </span>
                            </td>
                            <td class="flex-row text-start">
                                <div>
                                    <span class="text-body-2">{{ item.lan_nome }}</span>
                                </div>
                                <div>
                                    <span class="text-subtitle-2">{{ item.lan_desc }}</span>
                                </div>
                            </td>
                            <td class="">{{ item.lan_caixa }}</td>
                            <td>{{ item.lan_categoria }}</td>
                            <td>
                                <v-chip size="small" class="w-50 justify-center " variant="flat" :color="colorChip(item.lan_status)">
                                    {{ item.lan_status }}
                                </v-chip>
                            </td>
                            <td>{{ item.lan_cliente }}</td>
                            <td>{{ item.lan_valor }}</td>
                            <td>
                                <div class="ml-auto">
                                    <v-btn icon="mdi-credit-card" rounded="0" variant="flat" size="small"></v-btn>
                                    <v-btn icon="mdi-delete-outline" rounded="0" variant="flat" size="small"></v-btn>
                                    <v-btn icon="mdi-account"  rounded="0" variant="flat" size="small"></v-btn>
                                    <v-btn icon="mdi-cog-transfer-outline" rounded="0" variant="flat" size="small"></v-btn>
                                </div>
                            </td>
                        </tr>
                    </template>
                    <template v-slot:bottom>
                      <v-pagination
                        v-model="pageDataTable"
                        :length="pageCount"
                        next-icon="mdi-menu-right"
                        prev-icon="mdi-menu-left"
                        >
                      </v-pagination>
                    </template>
                </v-data-table>
            </v-main>
        </v-app>
        </v-card>
        <DialogLancamento :dialog="dialogLancamento" :key="key"/>
    </div>
</template>

<script>
import BreadCrumbs from '@/components/geral/BreadCrumbs.vue';
import moment from 'moment';
import DialogLancamento from '@/components/FluxoDeCaixa/DialogLancamento.vue';
export default {
    methods:{
        openDialogLancamento(){
          this.key++
          this.dialogLancamento = true
        },
        validarDataVencimento(date){
            if(date.lan_status == 'Pago'){
                return 'text-caption text-black'
            }
            else{
                console.log(moment(date.lan_dt_vencimento,'DD/MM/YYYY').format('DD/MM/YYYY') < moment().format('DD/MM/YYYY'))
                if(moment(date,'DD/MM/YYYY').format('DD/MM/YYYY') > moment().format('DD/MM/YYYY') == false){
                    return 'text-caption text-black'
                }
                else{
                    return 'text-caption text-red'
                }
            }
        },
        colorChip(value){
            switch(value){
                case 'Aberto':
                    return 'blue-darken-1'
                case 'Pago':
                    return 'green-darken-1'
                case 'Aguardando pagamento':
                    return 'yellow-darken-1'
                case 'Vencido':
                    return 'red-darken-1'
            }
        }
    },
    components:{
        BreadCrumbs,
        DialogLancamento,
    },
    computed:{
      pageCount () {
        return Math.ceil(this.desserts.length / this.itemsPerPage)
      },
      cabecalhos(){
          let headers1 = []
          if(this.$vuetify.display.md == true){
              headers1 = [
                  { title: 'Vencimento',align: 'start',sortable: false,key: 'lan_dt_vencimento'},
                  { title: 'Data do lançamento', key: 'lan_data', align: 'end' },
                  { title: 'Descrição', key: 'lan_desc', align: 'end' },
                  { title: 'Categoria', key: 'lan_categoria', align: 'end' },
                  { title: 'Status', key: 'lan_status', align: 'end',justify:'center' },
                  { title: 'Cliente', key: 'lan_cliente', align: 'end' },
                  { title: 'Valor', key: 'lan_valor', align: 'end' },
                  { title: 'Ações', align: 'end' },
              ]
          }else{
              headers1 = [
                  { title: 'Vencimento',align: 'start',sortable: false,key: 'lan_dt_vencimento'},
                  { title: 'Data do lançamento', key: 'lan_data', align: 'end' },
                  { title: 'Descrição', key: 'lan_desc', align: 'end' },
                  { title: 'Caixa', key: 'lan_caixa', align: 'end' },
                  { title: 'Categoria', key: 'lan_categoria', align: 'end' },
                  { title: 'Status', key: 'lan_status', align: 'end',justify:'center' },
                  { title: 'Cliente', key: 'lan_cliente', align: 'end' },
                  { title: 'Valor', key: 'lan_valor', align: 'end' },
                  { title: 'Ações', align: 'end' },
              ]
          }
          return headers1
      }
    },
    created(){
    },
    data(){
        return{
          key:0,
          dialogLancamento:false,
          itemsPerPage:5,
          pageDataTable: 1,
          loading:false,
          data: {},
          nav_filters:false,
          headers: [
              { title: 'Vencimento',align: 'start',sortable: false,key: 'lan_dt_vencimento'},
              { title: 'Data do lançamento', key: 'lan_data', align: 'end' },
              { title: 'Descrição', key: 'lan_desc', align: 'end' },
              { title: 'Caixa', key: 'lan_caixa', align: 'end' },
              { title: 'Categoria', key: 'lan_categoria', align: 'end' },
              { title: 'Status', key: 'lan_status', align: 'end',justify:'center' },
              { title: 'Cliente', key: 'lan_cliente', align: 'end' },
              { title: 'Valor', key: 'lan_valor', align: 'end' },
              { title: 'Ações', align: 'end' },
          ],
          desserts: [
              {
                  lan_cor:'green-accent-4',
                  lan_dt_vencimento: '16/07/2024',
                  lan_data:'15/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 1',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Vencido',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
              {
                  lan_cor:'green-accent-4',
                  lan_data:'15/07/2024',
                  lan_dt_vencimento: '25/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 2',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Aguardando pagamento',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
              {
                  lan_cor:'green-accent-4',
                  lan_data:'28/07/2024',
                  lan_dt_vencimento: '16/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 3',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Aberto',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
              {
                  lan_cor:'green-accent-4',
                  lan_data:'15/07/2024',
                  lan_dt_vencimento: '23/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 4',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Pago',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
              {
                  lan_cor:'green-accent-4',
                  lan_data:'15/07/2024',
                  lan_dt_vencimento: '23/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 5',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Pago',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
              {
                  lan_cor:'green-accent-4',
                  lan_data:'15/07/2024',
                  lan_dt_vencimento: '16/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 6',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Vencido',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
              {
                  lan_cor:'green-accent-4',
                  lan_data:'15/07/2024',
                  lan_dt_vencimento: '16/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 7',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Vencido',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
              {
                  lan_cor:'green-accent-4',
                  lan_data:'15/07/2024',
                  lan_dt_vencimento: '16/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 8',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Aberto',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
              {
                  lan_cor:'red-accent-4',
                  lan_data:'15/07/2024',
                  lan_dt_vencimento: '16/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 9',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Aberto',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
              {
                  lan_cor:'green-accent-4',
                  lan_data:'15/07/2024',
                  lan_dt_vencimento: '16/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 10',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Aberto',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
              {
                  lan_cor:'red-accent-4',
                  lan_data:'15/07/2024',
                  lan_dt_vencimento: '16/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 11',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Aberto',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
              {
                  lan_cor:'green-accent-4',
                  lan_data:'15/07/2024',
                  lan_dt_vencimento: '16/07/2024',
                  lan_nome: 'Teste',
                  lan_desc: 'Teste desc 12',
                  lan_caixa: 'Teste caixa',
                  lan_categoria: 'teste categoria',
                  lan_status: 'Aberto',
                  lan_cliente: 'Matheus',
                  lan_valor: 'R$1.000,00'
              },
          ],
        }
    }
}
</script>
