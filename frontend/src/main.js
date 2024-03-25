import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(Quasar, {
  plugins: {}, 
});

app.use(router);

app.mount("#app");
