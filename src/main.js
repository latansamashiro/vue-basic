import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PageOne from "./components/PageOne.vue";
import HelloWorld from "./components/HelloWorld.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import PageTwo from "./components/PageTwo.vue";
import PageThree from "./components/PageThree.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/page-one", component: PageOne },
  { path: "/page-two", component: PageTwo },
  { path: "/page-three", component: PageThree },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
