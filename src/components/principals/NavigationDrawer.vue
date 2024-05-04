<template>
    <v-navigation-drawer class="black" absolute permanent>
        <v-list color="transparent" class="mt-2">   
            <template v-if="logged == true">
                <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" class="text-body-1" title="Sandra Adams"  > 
                    <v-chip prepend-icon="mdi-circle-medium" color="green" variant="flat" density="comfortable" size="small">
                        Online
                    </v-chip>
                </v-list-item>
            </template>
        </v-list>
        <v-list nav>
            <v-divider class="ma-2" v-if="logged == true"></v-divider>
            <v-list-item  variant="outlined" link to="/">
                <template v-slot:prepend>
                    <v-icon class="text-black" icon="mdi-home"></v-icon>
                </template>
                <v-list-item-title class="text-body-2 text-black">Home</v-list-item-title>
            </v-list-item>
            <template v-if="logged == true">
                <v-list-group value="Lançamentos">
                    <template v-slot:activator="{ props }">
                        <v-list-item variant="outlined" v-bind="props">
                            <template v-slot:prepend>
                                <v-icon class="text-black" icon="mdi-cash-register"></v-icon>
                            </template>
                            <v-list-item-title class="text-body-2 text-black">Lançamentos</v-list-item-title>
                        </v-list-item>
                    </template>
                    <v-list-item class="mb-1" v-bind="props" variant="outlined" link to="/lancamentos">
                        <template v-slot:prepend>
                            <v-icon class="ml-n12" icon="mdi-format-list-checkbox"></v-icon>
                        </template>
                        <v-list-item-title class="text-body-2 text-black">Lista</v-list-item-title>
                    </v-list-item>
                    <v-list-item class="mb-1" v-bind="props" variant="outlined" link to="/lancamentos/tipos">
                        <template v-slot:prepend>
                            <v-icon class="ml-n12" icon="mdi-receipt"></v-icon>
                        </template>
                        <v-list-item-title class="text-body-2 text-black">Tipos de lançamento</v-list-item-title>
                    </v-list-item>
                </v-list-group>
                <v-list-item v-bind="props" variant="outlined" link to="/bancos">
                    <template v-slot:prepend>
                        <v-icon class="text-black" icon="mdi-bank"></v-icon>
                    </template>
                    <v-list-item-title class="text-body-2 text-black">Bancos</v-list-item-title>
                </v-list-item>
                <v-list-item v-bind="props" variant="outlined" link to="/carteiras">
                    <template v-slot:prepend>
                        <v-icon class="text-black" icon="mdi-wallet"></v-icon>
                    </template>
                    <v-list-item-title class="text-body-2 text-black">Carteiras</v-list-item-title>
                </v-list-item>
            </template>
        </v-list>
        <template v-slot:append>
            <v-divider class="ma-5"></v-divider>
            {{ teste }}
            <div class="ma-5 mb-5" >
                <template v-if="logged == true">
                    <v-btn theme="dark" block  class="justify-start text-white" prepend-icon="mdi-logout">
                    Logout
                    </v-btn>
                </template>
                <template v-else>
                    <v-btn theme="dark" block  class="justify-start mb-2 text-white" prepend-icon="mdi-login" @click="login()">
                    Login
                    </v-btn>
                    <v-btn theme="dark" block  class="justify-start text-black" variant="outlined" prepend-icon="mdi-account-plus">
                    Register
                    </v-btn>
                </template>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            logged: true,
        }
    },
    mounted(){

    },
    created(){
        this.access_token = localStorage.getItem('access_token');
        if(localStorage.getItem('access_token') === 'undefined'){
            console.log("Não tem token");
            localStorage.setItem('access_token',undefined);
            localStorage.setItem('refresh_token',undefined);
            localStorage.setItem('scope',undefined);
            localStorage.setItem('token_type',undefined);

        }else{
            console.log("tem access_token");
            this.refreshToken();
        }
        /*
        console.log("Access_token 1: " +this.access_token)
            if(this.access_token === null){
                console.log("Não tem token");
                var code = this.$route.query.code;
                var state = this.$route.query.state;
                this.login_created(code,state);
                //this.$router.push({ path: '/' })           
            }else{
                console.log("tem access_token");
                this.refreshToken();
            }
            //await this.musicaAtual();
        */
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
