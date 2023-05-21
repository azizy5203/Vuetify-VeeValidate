<script setup lang="ts">
import { ref } from "vue";
const props = defineProps(["title", "body"]);
const elevation = ref(0);
const colorData = ref("hsl(0 0% 0%/ .4)");
</script>

<template>
  <v-card
    class="simple-card"
    color="blue"
    :elevation="elevation"
    @mouseover="elevation = 5"
    @mouseleave="elevation = 0"
    image="https://picsum.photos/600/600?random&blur=5"
  >
    <v-card-title>{{ props.title }}</v-card-title>
    <v-card-text>{{ props.body }}</v-card-text>

    <slot name="select-all-info" :colorData="colorData"></slot>
  </v-card>
</template>
