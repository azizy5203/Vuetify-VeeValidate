<script setup></script>

<template>

  <div class="pa-5 bg-teal-lighten-3">
    <slot/>
  </div>

</template>

<style lang="scss" scoped>
div{
    overflow-y: auto;
    overflow-x: hidden;
    height: 500px;
}
</style>
