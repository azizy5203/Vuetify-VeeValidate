<script setup lang="ts"></script>

<template>
  <table class="table table-responsive">
    <slot></slot>
  </table>
</template>

<style lang="scss" scoped>
.table {
  border-collapse: collapse;
  border: 1px solid rgb(185, 185, 185);
}
</style>
