<template>
    <v-navigation-drawer :close-delay="3000" absolute temporary  v-model="drawerNav">
        <v-list density="compact" nav :lines="false" open-strategy="single">
            <v-list-item  variant="flat" class="bg-green mb-md-5" link to="/financeiro/fluxo-de-caixa" @click="this.$emit('closeDrawer',!drawer)">
                <template v-slot:prepend>
                    <v-icon class="text-black" size="small" icon="mdi-cash"></v-icon>
                </template>
                <v-list-item-title class="text-caption text-black">Nova Cobrança</v-list-item-title>
            </v-list-item>
            <v-list-item  variant="flat" link to="/" @click="this.$emit('closeDrawer',!drawer)">
                <template v-slot:prepend>
                    <v-icon class="text-black" size="small" icon="mdi-home"></v-icon>
                </template>
                <v-list-item-title class="text-caption text-black">Home</v-list-item-title>
            </v-list-item>
            <v-list-group value="Financeiro" density="compact">
                <template v-slot:activator="{ props }">
                    <v-list-item variant="flat" v-bind="props">
                        <template v-slot:prepend>
                            <v-icon class="text-black" icon="mdi-currency-usd"></v-icon>
                        </template>
                        <v-list-item-title class="text-caption text-black" >Financeiro</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item class="mb-1 bg-list-soft" v-bind="props" variant="flat" @click="this.$emit('closeDrawer',!drawer)" link to="/financeiro/fluxo-de-caixa">
                    <template v-slot:prepend>
                        <v-icon class="ml-md-n8" size="small" icon="mdi-format-list-bulleted-type"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Fluxo de caixa</v-list-item-title>
                </v-list-item>
                <v-list-item class="mb-1 bg-list-soft" v-bind="props" variant="flat" @click="this.$emit('closeDrawer',!drawer)" link to="/lancamentos/tipos">
                    <template v-slot:prepend>
                        <v-icon class="ml-md-n8" size="small" icon="mdi-file-document-outline"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Notas Fiscais</v-list-item-title>
                </v-list-item>
                <v-list-item class="mb-1 bg-list-soft" v-bind="props" variant="flat" @click="this.$emit('closeDrawer',!drawer)" link to="/lancamentos/tipos">
                    <template v-slot:prepend>
                        <v-icon class="ml-md-n8" size="small" icon="mdi-cash-multiple"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Espécies de pagamento</v-list-item-title>
                </v-list-item>
            </v-list-group>
            <v-list-item v-bind="props" @click="this.$emit('closeDrawer',!drawer)" variant="flat" link to="/bancos">
                <template v-slot:prepend>
                    <v-icon class="text-black" size="small" icon="mdi-bell"></v-icon>
                </template>
                <v-list-item-title class="text-caption text-black">this.$emit('closeDrawer',!drawer)</v-list-item-title>
            </v-list-item>
            <v-list-item v-bind="props" @click="this.$emit('closeDrawer',!drawer)" variant="flat" link to="/carteiras">
                <template v-slot:prepend>
                    <v-icon class="text-black" size="small" icon="mdi-spray-bottle"></v-icon>
                </template>
                <v-list-item-title class="text-caption text-black">Higienização</v-list-item-title>
            </v-list-item>
            <v-list-item v-bind="props" @click="this.$emit('closeDrawer',!drawer)" variant="flat" link to="/carteiras">
                <template v-slot:prepend>
                    <v-icon class="text-black" size="small" icon="mdi-credit-card-search-outline"></v-icon>
                </template>
                <v-list-item-title class="text-caption text-black">Análise de crédito</v-list-item-title>
            </v-list-item>
            <v-list-item v-bind="props" @click="this.$emit('closeDrawer',!drawer)" variant="flat" link to="/carteiras">
                <template v-slot:prepend>
                    <v-img :width="20" aspect-ratio="1/1" class="mr-md-8" src="@/assets/logo_serasa_icon.png"
                    ></v-img>
                </template>
                <v-list-item-title class="text-caption text-black">Serasa</v-list-item-title>
            </v-list-item>
            <v-list-group value="Cadastros" density="compact">
                <template v-slot:activator="{ props }">
                    <v-list-item variant="flat" v-bind="props">
                        <template v-slot:prepend>
                            <v-icon class="text-black" icon="mdi-currency-usd"></v-icon>
                        </template>
                        <v-list-item-title class="text-caption text-black">Cadastros</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item class="mb-1 bg-list-soft" @click="this.$emit('closeDrawer',!drawer)" v-bind="props" variant="flat" link to="/lancamentos/tipos">
                    <template v-slot:prepend>
                        <v-icon class="ml-md-n8" size="small" icon="mdi-clipboard-list-outline"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Categorias</v-list-item-title>
                </v-list-item>
                <v-list-item class="mb-1 bg-list-soft" @click="this.$emit('closeDrawer',!drawer)" v-bind="props" variant="flat" link to="/lancamentos">
                    <template v-slot:prepend>
                        <v-icon class="ml-md-n8" size="small" icon="mdi-cash-register"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Caixas</v-list-item-title>
                </v-list-item>
                <v-list-item class="mb-1 bg-list-soft" @click="this.$emit('closeDrawer',!drawer)" v-bind="props" variant="flat" link to="/lancamentos/tipos">
                    <template v-slot:prepend>
                        <v-icon class="ml-md-n8" size="small" icon="mdi-clipboard-list-outline"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Clientes</v-list-item-title>
                </v-list-item>
                <v-list-item class="mb-1 bg-list-soft" @click="this.$emit('closeDrawer',!drawer)" v-bind="props" variant="flat" link to="/lancamentos/tipos">
                    <template v-slot:prepend>
                        <v-icon class="ml-md-n8" size="small" icon="mdi-cash-multiple"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Fornecedores</v-list-item-title>
                </v-list-item>
            </v-list-group>
            <v-list-group value="Relatórios" density="compact">
                <template v-slot:activator="{ props }">
                    <v-list-item variant="flat" v-bind="props">
                        <template v-slot:prepend>
                            <v-icon class="text-black" icon="mdi-google-analytics"></v-icon>
                        </template>
                        <v-list-item-title class="text-caption text-black">Relatórios</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item class="mb-1 bg-list-soft" v-bind="props" variant="flat" link to="/lancamentos/tipos">
                    <template v-slot:prepend>
                        <v-icon class="ml-md-n8" size="small" icon="mdi-newspaper-variant"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Relatório geral</v-list-item-title>
                </v-list-item>
                <v-list-item class="mb-1 bg-list-soft" v-bind="props" variant="flat" link to="/lancamentos/tipos">
                    <template v-slot:prepend>
                        <v-icon class="ml-md-n8" size="small" icon="mdi-poll"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Relatório de caixas</v-list-item-title>
                </v-list-item>
                <v-list-item class="mb-1 bg-list-soft" v-bind="props" variant="flat" link to="/lancamentos/tipos">
                    <template v-slot:prepend>
                        <v-icon class="ml-md-n8" size="small" icon="mdi-cash-minus"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Contas a pagar</v-list-item-title>
                </v-list-item>
                <v-list-item class="mb-1 bg-list-soft" v-bind="props" variant="flat" link to="/lancamentos/tipos">
                    <template v-slot:prepend>
                        <v-icon class="ml-md-n8" size="small" icon="mdi-cash-plus"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Contas a receber</v-list-item-title>
                </v-list-item>
            </v-list-group>
            <v-list-item v-bind="props" @click="drawerNav = !drawerNav" variant="flat" link to="/carteiras">
                <template v-slot:prepend>
                    <v-icon class="text-black" icon="mdi-school-outline"></v-icon>
                </template>
                <v-list-item-title class="text-caption text-black">Base de conhecimento</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            logged: true,
            drawerNav: false
        }
    },
    props:{
        drawer:Boolean
    },
    watch:{
        drawer(){
            this.drawerNav = this.drawer
        }
    },
    mounted(){

    },
    created(){

    },
    methods:{
        login(){
        location.href = 'https://accounts.spotify.com/authorize?response_type=code&client_id='+this.client_id+'&scope='+this.scope+'&redirect_uri='+this.redirect_uri;
        /*
        axios.get("http://localhost:8080/login").then(res =>{
            console.log("Deu Certo");
            console.log(res)
            //window.open(res.data.link,'_self');
            //this.login_created();
        }).catch(err => {
            console.log(err);
        })
        */
        },
        login_created(){
            axios.get("/getToken",
                    {headers:{
                        code:this.$route.query.code,
                        state:this.$route.query.state
                }}).then(async json => {
                if(json.data.access_token != undefined){
                    this.access_token = json.data.access_token;
                    console.log("Novo access_token")
                    this.refresh_token = json.data.refresh_token;
                    localStorage.setItem('access_token',json.data.access_token);
                    localStorage.setItem('refresh_token',json.data.refresh_token);
                    localStorage.setItem('scope',json.data.scope);
                    localStorage.setItem('token_type',json.data.token_type);

                    axios.get("/getUsuarioAtual",
                    {headers:{
                        access_token:this.access_token
                    }}).then(resultado => {
                        if(resultado.data != undefined){
                            this.nm_usuario = resultado.data.display_name,
                            this.imagem_url = resultado.data.images[1].url
                            this.logged = true
                        }}).catch(erro => {
                            console.log("deu erro")
                            console.log(erro);
                            this.logged = false;
                        });
                }}).catch(err => {
                console.log("Deu errado!")
                console.log(err);
                this.logged = false
                });
        },
        refreshToken(){
            this.refresh_token = localStorage.getItem("refresh_token");
            console.log("Refresh token (refreshToken):" +this.refresh_token);
            axios.get("/getRefreshToken",{
                headers:{
                    refreshToken: this.refresh_token
                }}).then(json => {
                    console.log("Deu certo no refresh token!");
                    localStorage.setItem('access_token',json.data.access_token);
                    localStorage.setItem('refresh_token',json.data.refresh_token);
                }).catch(err => {
                    console.log("Deu erro no refresh token!");
                    console.log(err);
                });
        },
        getToken(){
            axios.get("/getToken",{
                headers:{
                        code:this.$route.query.code,
                        state:this.$route.query.state
                }
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
    },
}
</script>

<style>
    .bg-list-soft{
        background-color: #ebe6eb;
    }
</style>
