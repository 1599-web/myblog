import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/view/PageIndex.vue"),
  },
  {
    path: "/boke",
    name: "boke",
    component: () => import("@/view/PageBoke.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("@/view/PageGame.vue"),
  },
  {
    path: "/arg",
    name: "arg",
    component: () => import("@/view/PageArg.vue"),
  },
  {
    path: "/celebra",
    name: "celebra",
    component: () => import("@/view/PageCel.vue"),
  },
];
// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 暴露路由
export default router;