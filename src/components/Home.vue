<template>
  <MainNav />
  <div class="home-container">
    <div class="d-flex justify-center align-center">
      <input v-model="query" @keyup="recipeStore.searchRecipes(query)" placeholder="Search for recipes" class="search-input" />
    </div>

    <div v-if="recipeStore.recipes.length > 0" class="d-flex flex-sm-wrap justify-center">
      <CardRecipe v-for="(r, index) in recipeStore.recipes" :key="index" :recipe="r" @click="searchPageInfo(r.id)" />
    </div>


    <div v-else class="no-results">
      <p>No recipes found. Please try a different search!</p>
    </div>
  </div>
</template>

<script>
import { useRecipeStore } from "../stores/recipeStore";
import { useRouter } from "vue-router";
import CardRecipe from "./CardRecipe.vue";
import MainNav from "./MainNav.vue";
import { ref, } from "vue";

export default {
  name: "Home",
  components: { MainNav, CardRecipe },
  setup() {
    const recipeStore = useRecipeStore();
    const router = useRouter();
    const query = ref("");


    const searchPageInfo = (id) => {
      router.push({
        name: "info",
        params: { id },
      });
    };

    return {
      recipeStore,
      searchPageInfo,
      query
    };
  },
};
</script>
<style scoped>
.search-button {
  background-color: #1976d2;
  color: #f9f7f3;
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
  height: 50px;
  width: 400px;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #1976d2;
  outline: none;
}


.home-container {
  padding: 30px;
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