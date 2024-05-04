<template>
    <v-container>
      <h1 class="text-body-1">Teste para card de streamer online</h1>
      <h1>{{  }}</h1>
      <v-divider class="ma-5"></v-divider>
      <v-row>
        <v-col cols="12" sm="3" >
        </v-col>
      </v-row>
  
    </v-container>
  </template>
  
  <script>
  //import axios from 'axios';
  //import AppBar from '@/components/principals/AppBar'
  export default {
    data(){
        return{
            client_id : "a9511773d66947d089e44597b7bb6df7",
            client_secret : "abf21902f76b4026b31fc0acab14ee0d"
        }
    },
    name: 'HomeViewLogged',
    methods:{

    },
    mounted(){
        //let params = new URLSearchParams(document.location.search)
        //let code = params.get("code")

        // Requisição Post
        /*
        axios({
            method:"POST",
            url: 'https://accounts.spotify.com/api/token',
            data:{
                grant_type: "authorization_code",
                code,
                redirect_uri: 'http://localhost:8081/home'
            },
            headers:{
                Authorization: 'Basic ' + (new Buffer.from(this.client_id + ':' + this.client_secret).toString('base64')),
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        */
    },
    components: {
      //AppBar
    },
    
  }
  </script>
  