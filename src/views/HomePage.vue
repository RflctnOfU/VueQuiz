<script setup>
import questions from "../data/questions";
import { ref } from "vue";
let counter;
let timeRemaining = ref(75);
let showIntro = ref(true);
let showQuestions = ref(false);
const index = ref(0);
const qs = ref(questions);
console.log(showIntro);
console.log(showQuestions);
let correctness = "";

function startQuiz() {
  showIntro.value = !showIntro.value;
  console.log(showIntro);
  counter = setInterval(() => {
    timeRemaining.value--;
    // if (timeRemaining > 0) {
    //   return timeRemaining;
    // }
    if (timeRemaining.value <= 0) {
      clearInterval(counter);
    }
  }, 1000);
}
function answerSelection(e) {
  let choice = e.target.textContent;
  console.log(choice);
  console.log(qs.value[index.value].answer);
  if (choice === qs.value[index.value].answer) {
    correctness = "Correct!";
    setTimeout(() => {
      correctness = "";
    }, 2000);
    index.value++;
  } else {
    timeRemaining.value -= 15;
    correctness = "Incorrect!";
    setTimeout(() => {
      correctness = "";
    }, 2000);
    index.value++;
  }
}
</script>
<template>
  <header id="header">
    <div id="highscores">
      <router-link to="/high-scores">High Scores</router-link>
    </div>
    <h1 class="welcome">Code Quiz!!</h1>
    <div class="time">Time remaining: {{ timeRemaining }}</div>
  </header>
  <div class="intro" v-if="showIntro">
    <h2>Welcome to the Code Quiz!!</h2>
    <p>
      You have 75 seconds to complete the quiz. Any wrong answer will subtract
      15 seconds from the remaining time!!
    </p>
    <button class="start" @click="startQuiz">Start</button>
  </div>
  <div class="container" v-else-if="!showIntro">
    <h2>{{ qs[index].title }}</h2>
    <button
      v-for="choice in qs[index].choices"
      :key="choice"
      @click="answerSelection"
    >
      {{ choice }}
    </button>
    <br />
    <div :key="correctness">
      {{ correctness }}
    </div>
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

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
