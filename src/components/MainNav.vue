<template>
  <div>
    <v-app-bar app :elevation="2" class="app-bar">
      <v-app-bar-title>Find a recipe</v-app-bar-title>
      <router-link :to="{ name: 'login' }">
        <v-btn class="login-logout-btn mr-4">Log in</v-btn>
        <v-btn class="login-logout-btn mr-4">Log out</v-btn>
      </router-link>
    </v-app-bar>

    <!-- Contenu qui sera poussé sous la barre d'application -->
    <div class="main-content">
      <!-- Ton contenu principal ici -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRecipeStore } from "../stores/recipeStore";
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: "MainNav",

  setup() {
    const recipeStore = useRecipeStore();
    const query = ref("");
    const { logout } = useAuth0();

    return {
      recipeStore,
      query,
      logout: () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      }
    };
  },
};
</script>

<style scoped>
.app-bar {
  background-color: #f7a072;

  color: #f9f7f3;

}

.login-logout-btn {
  background: linear-gradient(90deg, #0fa3b1, #0fa3b1);
  color: #f9f7f3;
  border-radius: 20px;
  padding: 10px 20px;
  transition: background-color 0.3s, transform 0.2s;
}

.search-button:hover {
  background-color: #f7a072;
  transform: scale(1.05);
}

.main-content {
  padding-top: 64px;
  /* Ajuster cette valeur selon la hauteur de ta v-app-bar */
}
</style>