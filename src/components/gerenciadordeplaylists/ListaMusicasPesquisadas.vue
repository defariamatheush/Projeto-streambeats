<template>
    <v-card>
        <v-list lines="three">
            <v-list-item v-for="n in 3"
             :key="n"
             :title="'Item ' + n"
             subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
             item-props
             prepend-avatar="https://i.scdn.co/image/ab6761610000e5eb6be070445b03e0b63147c2c1" >
            </v-list-item>
            </v-list>
    </v-card>
</template>

<script>


export default ({

})
</script>
