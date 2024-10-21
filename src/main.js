import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Pas besoin de PiniaVuePlugin avec Vue 3
import { createVuetify } from 'vuetify';
import { createAuth0 } from '@auth0/auth0-vue';

// Vuetify
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import '@mdi/font/css/materialdesignicons.css';


import App from './App.vue';
import router from './router';

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(
  createAuth0({
    domain: "dev-fl5og68se0rlagw7.us.auth0.com",
    clientId: "hXfLVACPsNwhroFMD83DjoiQQEM1H2K2",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);

app.mount('#app');
