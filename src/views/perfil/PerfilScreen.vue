<template>
    <div class="w-100">
        <v-sheet :height="160" class="d-flex align-end" color="black" rounded>
            <div class="d-flex mx-auto my-auto">
                 <v-img
                     :width="300"
                     aspect-ratio="16/9"
                     rounded
                     src="@/assets/logo-branca.png"
                     >
                 </v-img>
             </div>
        </v-sheet>
        <v-sheet :height="15" class="d-flex" color="white">
            <div class="d-flex w-50">
                <div class="mx-auto d-flex align-center" style="position:sticky">
                    <v-avatar size="120" variant="flat" class="" image="https://randomuser.me/api/portraits/women/85.jpg" color="indigo">
                    </v-avatar>
                </div>
                <div class="align-end" style="margin-left:26%;margin-top: 2%;position: absolute;">
                    <v-btn color="grey" size="x-small"  icon="mdi-camera"></v-btn>
                </div>
            </div>
        </v-sheet>
        <div class="w-25 mx-auto mt-15">
            <span class="text-body-1">Dados pessoais:</span>
            <v-row class="py-3">
                <v-col cols="12" md="12" class="pb-0">
                    <v-text-field density="compact" variant="outlined" label="Nome"></v-text-field>
                </v-col>
                <v-col cols="12" md="12" class="py-0">
                    <v-text-field density="compact" variant="outlined" label="E-mail"></v-text-field>
                </v-col>
                <v-col cols="12" md="12" class="py-0">
                    <v-text-field density="compact" v-model="passwordNova" :type="verSenha == true ? 'text' : 'password'" :append-inner-icon="verSenha == true ? 'mdi-eye' : 'mdi-eye-off'" @click:append-inner="verSenha = !verSenha" variant="outlined" label="Senha*"></v-text-field>
                    <div class="d-flex">
                        <v-fade-transition>
                            <v-btn v-show="alterarSenhaBtn" prepend-icon="mdi-sync" density="compact" class="ml-auto text-caption pt-0" variant="flat" color="warning">
                                Alterar senha
                            </v-btn>
                        </v-fade-transition>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name:'PerfilScreen',
    data(){
        return{
            verSenha:false,
            password:'teste',
            passwordNova:'',
            alterarSenhaBtn: false
        }
    },
    watch:{
        passwordNova(){
            if(this.passwordNova != this.password){
                this.alterarSenhaBtn = true
            }else{
                this.alterarSenhaBtn = false
            }
        }
    },
    created(){
        this.passwordNova = this.password
    }
}
</script>