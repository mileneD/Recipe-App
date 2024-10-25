import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Pas besoin de
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
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,

    authorizationParams: {
      redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      audience: import.meta.env.VITE_AUTH0_AUDIENCE
    }
  })
);

app.mount('#app');
