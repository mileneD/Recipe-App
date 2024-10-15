<template>
    <div>
      <h1>Recipe Information</h1>

    </div>
  </template>

  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { getRecipeInfo } from '@/services/spoonacularService';

  export default {
    name: 'RecipeInfo',
    setup() {
      const route = useRoute();
      const recipe = ref(null);
      const id = route.params.id; // Récupérer l'ID de la recette à partir des paramètres de la route

      const fetchRecipeInfo = async () => {
        try {
          recipe.value = await getRecipeInfo(id);
        } catch (error) {
          console.error('Error fetching recipe info:', error);
        }
      };

      onMounted(fetchRecipeInfo); // Appeler la fonction au montage du composant

      return {
        recipe,
      };
    },
  };
  </script>

  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
