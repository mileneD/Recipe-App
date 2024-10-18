<template>
  <MainNav />

  <div class="recipe-container mt-4">
    <h1 class="text-center">Recipe Information</h1>


    <div v-if="recipe" class="recipe-card">
      <h2>{{ recipe.title }}</h2>
      <img class="img-card" :src="recipe.image" :alt="recipe.title" @error="imageError = true" />
      <div v-if="imageError">
        <img class="img-card"
          src="https://st2.depositphotos.com/2586633/46477/v/450/depositphotos_464771766-stock-illustration-no-photo-or-blank-image.jpg" />
      </div>

      <div class="recipe-details">
        <p><strong>Servings:</strong> {{ recipe.servings }}</p>
        <p>
          <strong>Preparation Time:</strong>
          {{ recipe.preparationMinutes }} minutes
        </p>
        <p>
          <strong>Cooking Time:</strong> {{ recipe.cookingMinutes }} minutes
        </p>
        <p><strong>Ready in:</strong> {{ recipe.readyInMinutes }} minutes</p>

        <p v-if="recipe.aggregateLikes">Likes: {{ recipe.aggregateLikes }}</p>
        <p v-if="recipe.healthScore">
          <strong>Health Score:</strong> {{ recipe.healthScore }}/100
        </p>
        <p v-if="recipe.spoonacularScore">
          <strong>Spoonacular Score:</strong> {{ recipe.spoonacularScore }}
        </p>
        <p v-if="recipe.pricePerServing">
          <strong>Price Per Serving:</strong> ${{
            recipe.pricePerServing.toFixed(2)
          }}
        </p>
        <p v-if="recipe.sourceName">
          <strong>Source:</strong>
          <a :href="recipe.sourceUrl" target="_blank">{{
            recipe.sourceName
          }}</a>
        </p>

        <p v-if="recipe.dishTypes">
          <strong>Dish Types:</strong> {{ recipe.dishTypes.join(", ") }}
        </p>
      </div>
    </div>
    <router-link :to="{ name: 'home', query: { q: query } }" class="btn-back mt-4">Back to
      Results</router-link>
  </div>
</template>

<script>
import { useRecipeStore } from "../stores/recipeStore";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import MainNav from "./MainNav.vue";

export default {
  name: "RecipeInfo",
  components: { MainNav },
  setup() {
    const recipeStore = useRecipeStore();
    const recipe = ref([]);
    const route = useRoute();
    const imageError = ref(false);
    const query = ref("");

    onMounted(() => {
      recipeStore.fetchRecipeInfo(route.params.id).then(() => {
        recipe.value = recipeStore.recipes.find(
          (r) => r.id === parseInt(route.params.id)
        );
      });
    });

    return {
      recipeStore,
      recipe,
      imageError,
      query,
    };
  },
};
</script>

<style scoped>
.btn-back {
  display: inline-block;
  background-color: #007bff;
  color: white;
  max-width: 200px;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
}

.recipe-container {
  background-color: #ffe4e6; /* Rose pastel */
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.recipe-card {
  text-align: center;
  background-color: #fff; /* Couleur de fond blanche à l'intérieur de la carte */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}


h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

h2 {
  font-size: 22px;
  color: #2c3e50;
  margin-bottom: 10px;
}

.img-card {
  width: 60%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.recipe-details {
  text-align: left;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

.recipe-details p {
  margin: 8px 0;
}

strong {
  color: #2c3e50;
}

.btn-back:hover {
  background-color: #0056b3;
}
</style>