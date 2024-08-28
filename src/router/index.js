// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/try",
        name: "Try",
        component: () => import("@/views/Try.vue"),
      },
      {
        path: "/expand",
        name: "Expand",
        component: () => import("@/views/Expand/Expand.vue"),
      },
      {
        path: "/expansion",
        name: "ExpansionPanels",
        component: () => import("@/views/Expand/ExpansionPanels.vue"),
      },
      {
        path: "/scroll-animations",
        name: "ScrollAnimations",
        component: () => import("@/views/ScrollAnimations.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/auth",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/auth/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Login.vue"),
      },
      {
        path: "/auth/signup",
        name: "Signup",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/SignUp.vue"),
      },
    ],
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/animate",
    name: "Animate",
    component: () => import("@/views/Animate.vue"),
  },
  {
    path: "/risk",
    name: "Risk",
    component: () => import("@/views/Risks/RiskMatrix.vue"),
  },
  {
    path: "/collapse",
    name: "Collapse",
    component: () => import("@/views/Collapse/CollapseContainer.vue"),
  },
  {
    path: "/scroll-animations-header",
    name: "ScrollAnimationsHeader",
    component: () => import("@/views/ScrollAnimationsHeader.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to,from,next)=>{

// })
export default router;
