<template>
  <div>
    welcome
    <h4>欢迎来到韩大壮的学习 VUE 网站！</h4>
  </div>
  <hr />
  <div id="hellovue" class="demo">
    {{ messageA }}
    {{ messageB }}
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
const messageA = ref('Hello Vue!')
const messageB = ref('hell0 vue!!!')
</script>
<style>
body {
  padding: 0;
  margin: 0;
  display: block;
}
</style>
