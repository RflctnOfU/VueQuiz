import { createRouter, createWebHistory } from "vue-router";
import HighScores from "../views/HighScores.vue";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/high-scores",
      name: "highscores",
      component: HighScores,
    },
  ],
});

export default router;
