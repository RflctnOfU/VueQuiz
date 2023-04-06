<script setup>
import questions from "../data/questions";
import { ref } from "vue";

const showIntro = ref(true);
const showQuestions = ref(false);
const index = ref(0);
const qs = ref(questions);
</script>
<template>
  <div class="intro">
    <h2>Welcome to the Code Quiz!!</h2>
    <p>
      You have 75 seconds to complete the quiz. Any wrong answer will subtract
      15 seconds from the remaining time!!
    </p>
    <button class="start">Start</button>
  </div>
  <div class="container" v-show="showQuestions">
    <h2>{{ qs[index].title }}</h2>
  </div>
</template>
<style scoped>
button {
  border-radius: 5px;
  color: lightgoldenrodyellow;
  background-color: blueviolet;
}
</style>
