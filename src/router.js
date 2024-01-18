import { createRouter, createWebHashHistory } from "vue-router";
import Start from "./layouts/Start.vue";
import Main from "./layouts/Main.vue";
import Catalog from "./pages/Catalog.vue";
import Bascket from "./pages/Bascket.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Start },
    {
      path: "/main",
      component: Main,
      children: [
        {
          path: "",
          component: () => Catalog,
        },
        {
          path: "bascket",
          component: () => Bascket,
        },
      ],
    },
  ],
});
