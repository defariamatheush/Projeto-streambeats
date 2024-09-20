<template>
    <v-navigation-drawer temporary location="right" v-model="drawerNav">
        <v-list density="compact" nav :lines="false" open-strategy="single">
            <v-list-item v-bind="props" variant="flat" link to="/perfil" @click="this.$emit('closeDrawer',!drawer)">
                <template v-slot:prepend>
                    <v-icon class="text-black" size="small" icon="mdi-account"></v-icon>
                </template>
                <v-list-item-title class="text-caption text-black">Meu Perfil</v-list-item-title>
            </v-list-item>
            <v-list-group value="Empresas" density="compact">
                <template v-slot:activator="{ props }">
                    <v-list-item variant="flat" v-bind="props">
                        <template v-slot:prepend>
                            <v-icon class="text-black" icon="mdi-briefcase"></v-icon>
                        </template>
                        <v-list-item-title class="text-caption text-black" >Empresas</v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item class="mb-1 bg-list-soft" v-bind="props" variant="flat" @click="this.$emit('closeDrawer',!drawer)" link to="/financeiro/fluxo-de-caixa">
                    <template v-slot:prepend>
                        <v-icon size="x-small" class="text-black" icon="mdi-account"></v-icon>
                    </template>
                    <v-list-item-title class="text-caption text-black">Seeth</v-list-item-title>
                </v-list-item>
            </v-list-group>
            <v-divider class="my-2 mx-4"></v-divider>
            <v-list-item v-bind="props" variant="flat" link to="/monetizacao/planos" @click="this.$emit('closeDrawer',!drawer)">
                <template v-slot:prepend>
                    <v-icon class="text-black" size="small" icon="mdi-ticket-percent-outline"></v-icon>
                </template>
                <v-list-item-title class="text-caption text-black">Planos</v-list-item-title>
            </v-list-item>
            <v-list-item v-bind="props" variant="flat" link to="/carteiras" @click="this.$emit('closeDrawer',!drawer)">
                <template v-slot:prepend>
                    <v-icon class="text-black" size="small" icon="mdi-city"></v-icon>
                </template>
                <v-list-item-title class="text-caption text-black">Empresas</v-list-item-title>
            </v-list-item>
            <v-divider class="my-2 mx-4"></v-divider>
            <v-list-item v-bind="props" variant="flat" link to="/carteiras" @click="this.$emit('closeDrawer',!drawer)">
                <template v-slot:prepend>
                    <v-icon class="text-black" size="small" icon="mdi-home-group"></v-icon>
                </template>
                <v-list-item-title class="text-caption text-black">Grupos</v-list-item-title>
            </v-list-item>
            <v-list-item v-bind="props" variant="flat" link to="/carteiras" @click="this.$emit('closeDrawer',!drawer)">
                <template v-slot:prepend>
                    <v-icon class="text-black" size="small" icon="mdi-account-supervisor-circle"></v-icon>
                </template>
                <v-list-item-title class="text-caption text-black">Usuários</v-list-item-title>
            </v-list-item>
        </v-list>
        <template v-slot:append>
            <v-list-item density="compact" class="mx-2 mb-5" nav theme="dark" v-bind="props" variant="flat" link to="/carteiras">
                <template v-slot:prepend>
                    <v-icon class="text-black" size="small" color="white" icon="mdi-logout"></v-icon>
                </template>
                <v-list-item-title class="text-caption">Logout</v-list-item-title>
            </v-list-item>
        </template>
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
