import { createApp } from "vue";
import { VueFire } from "vuefire";
import App from "./App.vue";
import router from "./router";
import { firebaseApp } from "@/firebase.js";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(VueFire, {
  firebaseApp,
  modules: [],
});

app.mount("#app");
