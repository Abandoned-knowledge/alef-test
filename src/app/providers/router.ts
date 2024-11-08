import { createWebHistory, createRouter } from "vue-router";
import FormPage from "@/pages/FormPage.vue";
import PreviewPage from "@/pages/PreviewPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: FormPage,
    },
    {
      path: "/preview",
      component: PreviewPage,
    },
  ],
});

export default router;
