import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PageOne from "./components/PageOne.vue";
import HelloWorld from "./components/HelloWorld.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/page-one', component: PageOne },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount("#app");

