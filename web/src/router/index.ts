import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/welcome",
    name: "Welcome",
    component: () =>
      import(/* webpackChunkName: "view-welcome" */ "@/views/Welcome.vue"),
    meta: {
      title: "欢迎页"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "view-login" */ "@/views/Login.vue"),
    meta: {
      title: "登录页"
    }
  },
  {
    path: "/",
    redirect: "Home",
    component: () =>
      import(/* webpackChunkName: "view-layout" */ "@/layout/Layout.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "view-home" */ "@/views/Home.vue"),
        meta: {
          title: "首页"
        }
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "view-about" */ "@/views/About.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
