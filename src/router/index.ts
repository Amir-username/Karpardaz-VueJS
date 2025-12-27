import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import JobSeekerLoginPage from "../pages/auth/JobSeekerLoginPage.vue";
import EmployerLoginPage from "../pages/auth/EmployerLoginPage.vue";
import JobSeekerSignupPage from "../pages/auth/JobSeekerSignupPage.vue";
import EmployerSignupPage from "../pages/auth/EmployerSignupPage.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/auth/jobseeker/login",
    name: "jobseeker-login",
    component: JobSeekerLoginPage,
  },
  {
    path: "/auth/employer/login",
    name: "employer-login",
    component: EmployerLoginPage,
  },
  {
    path: "/auth/jobseeker/signup",
    name: "jobseeker-signup",
    component: JobSeekerSignupPage,
  },
  {
    path: "/auth/employer/signup",
    name: "employer-signup",
    component: EmployerSignupPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
