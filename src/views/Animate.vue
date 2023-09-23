<script setup>
import Panel from '@/components/shared/Panel.vue';
import {ref} from 'vue'

const items = ref(Array.from({length:10},(_,index)=>{return{id:index,visible:true}}))

function toggleItemText(index,isVisible){
    
}
</script>

<template>
    <div class="pa-16">
        <Panel>
            <v-btn color="success" rounded @click="items.push({id:Math.floor(Math.random()*100),visible:false})">append</v-btn>
            <TransitionGroup name="list" tag="ul" class="list-style-none gap-1">
                <li v-for="item in items" :key="item">
                <span class="me-5"> >item {{ item.id }}</span>
                <v-btn color="red" rounded @click="items = items.filter(Item=>Item.id!==item.id)">del</v-btn>
                <!-- <v-btn :color="item.visible?'success':'black'">{{ item.visible?'hide':'show' }}</v-btn> -->
                </li>
            </TransitionGroup>
        </Panel>
    </div>
    </template>

<style lang="scss" scoped>

ul{
// display: flex;

//     display: grid;
// grid-template-rows: repeat(4,1fr);
}
.gap-1{
    gap: 1rem;
}

.list-style-none{
list-style: none;
}
.list-move,
.list-enter-active,
.list-leave-active{
    transition: all 0.5s ease;
}

.list-enter-from,.list-leave-to{
opacity: 0;
transform: scale(.2)
}

.list-leave-active {
  position: absolute;
}
</style>