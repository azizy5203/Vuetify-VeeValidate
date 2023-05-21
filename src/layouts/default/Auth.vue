<script setup lang="ts"></script>

<template>
  <v-main class="d-flex">
    <v-card class="w-75 ma-auto" color="grey-lighten-3">
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            src="https://fastly.picsum.photos/id/382/600/600.jpg?blur=10&hmac=eI6x3q3kb5jeiaIKSZDpawH5pu5JT8SllG3WVdvddV8"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <router-view />
        </v-col>
      </v-row>
    </v-card>
  </v-main>
</template>

<style lang="scss" scoped></style>
