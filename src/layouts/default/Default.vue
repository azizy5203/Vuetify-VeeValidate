<template>
  <v-app>
    <component :is="layout()"/>
  </v-app>
</template>

<script setup>
import Admin from "./Admin.vue";
import Auth from "./Auth.vue";
import { useRoute } from "vue-router";
function layout() {
  const route = useRoute();
  console.log(route.meta)
  return route.meta.requiresAuth==true?Admin:Auth
}
</script>
