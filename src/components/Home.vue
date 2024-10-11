<template>
  <div class="home-container">
    <MainNav :searchRecipes="searchRecipes" />





    <div v-if="recipes.length > 0" class="recipe-list">
      <h1 class="results-title">Results</h1>
      <div class="recipes-wrapper">
        <CardRecipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
      </div>
    </div>
    <div v-else class="no-results">
      <p>No recipes found. Please try a different search!</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getRecipes } from '@/services/spoonacularService';
import CardRecipe from './CardRecipe.vue';
import MainNav from './MainNav.vue';

export default {
  name: 'Home',
  components: { MainNav, CardRecipe },
  setup() {
    const recipes = ref([]);

    const searchRecipes = async (query) => {
      const data = await getRecipes(query);
      recipes.value = data.results || []; // Met à jour les recettes
    };

    return {
      recipes,
      searchRecipes,
    };
  }
}
</script>

<style scoped>
.home-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.results-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.recipe-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.recipes-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Espace entre les cartes de recettes */
}

.card-recipe {
  width: 300px; /* Largeur fixe pour les cartes */
  background: #f9f9f9; /* Couleur de fond des cartes */
  border-radius: 8px; /* Coins arrondis */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Ombre pour un effet 3D */
  padding: 16px; /* Padding intérieur */
}

.no-results {
  text-align: center;
  font-size: 1.2rem;
  color: #666; /* Couleur plus douce pour le texte */
}
</style>