<script setup>
import qs from "../data/questions";
import { ref } from "vue";

const index = ref(0);
const questions = ref(qs);
</script>
<template>
  <div class="container">
    <h2>{{ questions[index].title }}</h2>
  </div>
</template>
<style scoped></style>
