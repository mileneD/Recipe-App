<template>
    <div>
        <h1>Recipe Information</h1>
        <div v-if="recipe">
            <h2>{{ recipe.title }}</h2>
            <p>{{ recipe.description }}</p>
        </div>
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

        const fetchRecipeInfo = async (id) => {
            try {
                recipe.value = await getRecipeInfo(id);
            } catch (error) {
                console.error('Error fetching recipe info:', error);
            }
        };

        onMounted(() => {
            fetchRecipeInfo(route.params.id); // Charger la recette initiale
        });

        return {
            recipe
        };
    }
}
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>