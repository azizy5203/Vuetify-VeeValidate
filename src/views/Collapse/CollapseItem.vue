<script setup>
import { ref } from "vue";

const isCollapsed = ref(true);
function toggleCollapsing() {
  isCollapsed.value = !isCollapsed.value;
}
</script>

<template>
  <div :class="['collapse', { 'collapse--collapsed': isCollapsed }]">
    <div class="collapse__header" @click="toggleCollapsing">
      <div class="collapse__icon">
        <v-icon
          :icon="`${isCollapsed ? 'mdi-chevron-down' : 'mdi-chevron-up'}`"
        />
      </div>
      <div class="collapse__title"><h3>Main title</h3></div>
      <div class="collapse__actions">
        <v-icon icon="mdi-delete" size="20" />
        <v-icon icon="mdi-pencil" size="20" />
      </div>
    </div>
    <div class="collapse__body">
        <slot name="body"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collapse {
  $collapse-height: 15rem;
  $header-height: calc($collapse-height * 0.3333);
  $body-height: calc(100% - $header-height);

  background-color: #4692de;
  border-radius: 8px 8px 0 0;
  height: $collapse-height;
  overflow: hidden;

  transition: 0.3s all;
  overflow: hidden;
  &__header {
    display: flex;
    place-items: center;
    // align-items: baseline;
    gap: 1rem;
    height: $header-height;
    padding: 1rem;
    cursor: pointer;
  }
  &__icon {
    color: white;
    transition: 0.3s all;
     
  }
  &__title {
    flex: 1 0 0;
    color: white;
  }
  &__actions {
    display: flex;
    gap: .5rem;
    color: white;
    transition: 0.3s all;
    & .mdi-delete:hover{
        transition: 0.3s all;
        color: red;
     }
  }

  &__body {
    background-color: rgb(183, 208, 246);
    padding: 1rem;
    height: $body-height;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 9px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #a6a7a8;
      width: 1px;
      margin-top: 2px;
    }
  }
  &--collapsed {
    height: $header-height;
    padding: 0;
    border-radius: 8px;
  }
}
</style>
