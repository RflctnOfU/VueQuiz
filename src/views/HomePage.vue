<script setup>
import questions from "../data/questions";
import { ref } from "vue";

let showIntro = ref(true);
let showQuestions = ref(false);
const index = ref(0);
const qs = ref(questions);
console.log(showIntro);
console.log(showQuestions);
const introToggle = () => {
  !showIntro;
};
const questionsToggle = () => {
  !showQuestions;
};
const startQuiz = () => {
  introToggle();
  questionsToggle();
  console.log(showIntro);
  console.log(showQuestions);
};
</script>
<template>
  <div class="intro" v-if="showIntro">
    <h2>Welcome to the Code Quiz!!</h2>
    <p>
      You have 75 seconds to complete the quiz. Any wrong answer will subtract
      15 seconds from the remaining time!!
    </p>
    <button class="start" @click="showIntro = !showIntro">Start</button>
  </div>
  <div class="container" v-else-if="!showIntro">
    <h2>{{ qs[index].title }}</h2>
    <button v-for="choice in qs[index].choices">{{ choice }}</button>
  </div>
</template>
<style scoped>
button {
  border-radius: 5px;
  color: lightgoldenrodyellow;
  background-color: blueviolet;
  max-width: 150px;
  border: solid 2px rgb(155, 93, 213);
  transition: 300ms;
  margin: 3px;
}
button:hover {
  background-color: rgb(142, 54, 224);
  transition: ease-in-out;
  transform: scale(1.05);
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
