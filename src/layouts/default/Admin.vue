<script setup>
import { ref, onMounted, inject } from "vue";
import { toast } from "vue3-toastify";


const vuetify = inject('vuetify')

//sidebar expand switch
const drawer = ref(false);
onMounted(() => drawer.value = !vuetify.display.mobile.value)

// sidebar dropdown items
const cruds = [
  ["Create", "mdi-plus-outline"],
  ["Read", "mdi-file-outline"],
  ["Update", "mdi-update"],
  ["Delete", "mdi-delete"],
];


//footer items
const links = ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"];
</script>

<template>
  <v-navigation-drawer class="pa-2 pb-5" v-model="drawer" border="0" color="hsl(225 50% 90% /1)">
    <v-list nav class="pa-0" color="white" variant="tonal" active-color="blue" density="comfortable">
      <v-list-item title="Home" value="home" to="/" exact prepend-icon="mdi-home" />
      <v-list-item title="Try" value="about" to="/try" prepend-icon="mdi-test-tube" />
      <v-list-item title="Expand" value="expand" to="/expand" prepend-icon="mdi-arrow-expand-vertical" />
      <v-list-group value="Actions">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Actions"></v-list-item>
        </template>

        <v-list-item v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title" :prepend-icon="icon">
        </v-list-item>
      </v-list-group>
    </v-list>
    <template #append>
      <v-btn color="blue" prepend-icon="mdi-logout" to="/auth/login"><router-link to="/auth/login"
          style="text-decoration: none">Logout</router-link></v-btn>
    </template>
  </v-navigation-drawer>
  <!-- scroll-behavior="collapse elevate fade-image hide" -->
  <v-app-bar density="default" :extended="false" :collapse="false" elevation="3"
    image="https://picsum.photos/1920/1080?random&blur=10" scroll-behavior="hide" scroll-threshold="1000">
    <v-app-bar-title class="text-white"> App Title </v-app-bar-title>
    <template #prepend>
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>

  <v-main>
    <router-view />
    <v-footer color="blue">
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4 ma-auto" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-main>
</template>
