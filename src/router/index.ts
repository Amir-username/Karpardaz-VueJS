import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import JobSeekerLoginPage from "../pages/auth/JobSeekerLoginPage.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage
  },
  {
    path: "/auth/jobseeker/login",
    name: "jobseeker-login",
    component: JobSeekerLoginPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
