import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from './store/index.js'


import TheHeader from "./components/Layout/TheHeader.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("the-header", TheHeader);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);

app.mount("#app");
