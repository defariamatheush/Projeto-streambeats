<template>
    <div>
        <v-breadcrumbs class="text-caption" :items="items"></v-breadcrumbs>
    </div>
</template>

<script>
export default{
    data(){
        return{
            items:[]
        }
    },
    created(){
        let rota = this.$route.path
        let items = rota.substring(1,rota.length).split('/')
        for(let i = 0;i < items.length;i++){
            items[i] = items[i].charAt(0).toUpperCase() + items[i].slice(1);
            items[i] = items[i].replaceAll('-',' ')
        }
        this.items = items
        console.log("Items",this.items)
    }
}
</script>