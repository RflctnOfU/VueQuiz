<script setup>
import { RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header id="header">
    <div id="highscores"></div>
    <p class="welcome">Code Quiz!!</p>
  </header>
  <RouterView />
</template>

<style scoped>
#header {
  font-size: x-large;
  color: antiquewhite;
  max-height: 200px;
}
</style>
