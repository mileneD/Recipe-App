<template>
    <div>
      <MainNav />
      <input v-model="searchQuery" placeholder="Search for recipes" />
      <v-btn @click="searchRecipes">Search</v-btn>
      <div class="recipe-list">
        <CardRecipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
      </div>
    </div>
  </template>

  <script>
  import { ref, onMounted } from 'vue';
  import { getRecipes } from '@/services/spoonacularService';
  import CardRecipe from './CardRecipe.vue';
  import MainNav from './MainNav.vue';

  export default {
    name: 'Home',
    components: { MainNav, CardRecipe },
    setup() {
      const searchQuery = ref('');
      const recipes = ref([]);

      const fetchRecipes = async (query) => {
        try {
          const data = await getRecipes(query);

          // Afficher chaque recette dans la console
          data.results.forEach(recipe => {
            console.log(`Recipe ID: ${recipe.id}, Title: ${recipe.title}, Image: ${recipe.image}`);
          });

          recipes.value = data.results; // Met à jour les recettes
        } catch (error) {
          console.error('Failed to fetch recipes:', error);
        }
      };

      const searchRecipes = async () => {
        const exampleQuery = searchQuery.value || 'pasta'; // Utiliser "pasta" si searchQuery est vide
        await fetchRecipes(exampleQuery); // Appelle fetchRecipes avec la requête
      };

      onMounted(() => {
        fetchRecipes('pasta'); // Appelle fetchRecipes avec "pasta" lors du montage
      });

      return {
        searchQuery,
        recipes,
        searchRecipes,
      };
    },
  };
  </script>

  <style>
  .recipe-list {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
