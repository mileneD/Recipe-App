<template>
    <div class="card">
      <v-card elevated class="mx-4 my-4" text="...">
        <v-card-title class="flex">{{ recipe.title }}</v-card-title>
        <v-card-text>
          <img :src="recipe.image" :alt="recipe.title" />
        </v-card-text>
      </v-card>
    </div>
  </template>

  <script>
  export default {
    name: "CardRecipe",
    props: {
      recipe: {
        type: Object,
        required: true,
      },
    },
  };
  </script>

  <style scoped>
  .card {
    width: 15%;

  }
  </style>
