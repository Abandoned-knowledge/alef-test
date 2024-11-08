import { createApp } from "vue";
import App from "./App.vue";
import router from "./providers/router";
import pinia from "./providers/pinia";
import "./style/tailwind.css";

const app = createApp(App);
app.use(router).use(pinia).mount("#app");
