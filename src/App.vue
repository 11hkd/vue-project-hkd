<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidebarView from './views/SidebarView.vue'
</script>

<template>
  <SidebarView id="Sidebar" />
  <RouterView id="main" />
</template>

<style>
/* scope是仅仅对当前属性有效，会产生哈希值 */
body {
  padding: 0;
  margin: 0;
  max-width: calc(100vw - 17px);
}
#app {
  display: flex;
  border: 1px solid rgb(235, 10, 10);
}
#Sidebar {
  max-width: 300px;
  min-width: 200px;
  border: 1px solid rgb(235, 10, 10);
}
#main {
  border: 1px solid rgb(235, 10, 10);
  width: 100%;
  padding: 8px;
  display: block;
}
</style>
