<template>
  <div>
    <v-app-bar app :elevation="2">
      <v-app-bar-title>Find a recipe</v-app-bar-title>

      <!-- <input v-model="query" placeholder="Search for recipes" class="search-input" />
      <v-btn class="search-button" @click="recipeStore.searchRecipes(query)">Search</v-btn> -->
    </v-app-bar>

    <!-- Contenu qui sera poussé sous la barre d'application -->
    <div class="main-content">
      <!-- Ton contenu principal ici -->
    </div>
  </div>
</template>

<script>
import { ref, } from "vue";
import { useRecipeStore } from "../stores/recipeStore";

export default {
  name: "MainNav",

  setup() {
    const recipeStore = useRecipeStore();
    const query = ref("");

    return {
      recipeStore,
      query,
    };
  },
};
</script>

<style scoped>


/* .search-button {
  background-color: #1976d2;
  color: white;
  border-radius: 4px;
  padding: 8px 16px;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #155a8a;
}

.search-input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-right: 10px;
  width: 200px;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #1976d2;
  outline: none;
} */

.main-content {
  padding-top: 64px;
  /* Ajuster cette valeur selon la hauteur de ta v-app-bar */
  /* Espacement pour pousser le contenu sous la barre d'application */
}
</style>