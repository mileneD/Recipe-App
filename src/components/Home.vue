<template>
  <div class="home-container">
    <MainNav :searchRecipes="searchRecipes" />

    <div v-if="recipes.length > 0" class="d-flex flex-sm-wrap justify-center">
      <h1 class="text-center mb-8 text-h4 ">Results</h1>
      <div class="d-flex flex-sm-wrap justify-center">
        <CardRecipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" @click="() => searchPageInfo(recipe.id)"/>
      </div>
    </div>
    <div v-else class="no-results">
      <p>No recipes found. Please try a different search!</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getRecipes } from '@/services/spoonacularService';
import CardRecipe from './CardRecipe.vue';
import MainNav from './MainNav.vue';

export default {
  name: 'Home',
  components: { MainNav, CardRecipe },
  setup() {
    const recipes = ref([]);
    const router = useRouter(); // Accéder au routeur

    const searchRecipes = async (query) => {
      const data = await getRecipes(query);
      recipes.value = data.results || [];
    };

    const searchPageInfo = (id) => {
      router.push({ name: 'info', params: { id } }); // Navigation vers la route info avec l'ID
    };


    return {
      recipes,
      searchRecipes,
      searchPageInfo
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

.card-recipe {
  width: 500px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
}

.no-results {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}
</style>