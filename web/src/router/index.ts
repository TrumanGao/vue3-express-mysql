import { createRouter, createWebHashHistory } from "vue-router";

// 在 Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
      path: "/",
      redirect: "Home",
      component: () => import("../views/Layout/Layout.vue"),
      children: [
        {
          path: "/Home",
          name: "Home",
          component: () => import("../views/Home.vue"),
          meta: {
            title: "首页"
          }
        },
        {
          path: "/Login",
          name: "Login",
          component: () => import("../views/Login.vue"),
          meta: {
            title: "登录"
          }
        }
      ]
    },
    {
      path: "/Welcome",
      name: "Welcome",
      component: () => import("../views/Welcome.vue"),
      meta: {
        title: "欢迎"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});
router.afterEach((to, from) => {
  document.title = to.meta.title || "楚门导航";
});

export default router;
