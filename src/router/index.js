import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/About.vue"),
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../components/Catalog.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../components/Profile.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/Cart.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("../components/Favorites.vue"),
  },
  {
    path: "/buy",
    name: "Buy",
    component: () => import("../components/Buy.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
