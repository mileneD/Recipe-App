<template>
  <div>
    <v-app-bar app :elevation="2" class="app-bar">
      <v-app-bar-title>Find a recipe</v-app-bar-title>


        <template v-if="!isAuthenticated">
          <BtnSignUp />
          <BtnLogIn />
        </template>

        <template v-if="isAuthenticated">
          <BtnLogOut />
        </template>


    </v-app-bar>

    <!-- Contenu qui sera poussé sous la barre d'application -->
    <div class="main-content">
      <!-- Ton contenu principal ici -->
    </div>
  </div>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
import BtnLogOut from "./buttons/BtnLogOut.vue";
import BtnSignUp from "./buttons/BtnSignUp.vue";
import BtnLogIn from "./buttons/BtnLogIn.vue";

const {isAuthenticated} = useAuth0();

</script>

<style scoped>
.app-bar {
  background-color: #f7a072;

  color: #f9f7f3;

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