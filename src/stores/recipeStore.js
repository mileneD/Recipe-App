import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getRecipes, getRecipeInfo } from '@/services/spoonacularService';

export const useRecipeStore = defineStore('recipeStore', () => {
  const recipes = ref([]);
  const recipe = ref(null);
  const searchQuery = ref('');

  const searchRecipes = async (query) => {
    searchQuery.value = query;
    try {
      const data = await getRecipes(query);
      recipes.value = data.results || [];
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const fetchRecipeInfo = async (id) => {
    try {
      recipe.value = await getRecipeInfo(id);
    } catch (error) {
      console.error('Error fetching recipe info:', error);
    }
  };

  return {
    recipes,
    recipe,
    searchQuery,
    searchRecipes,
    fetchRecipeInfo,
  };
});
