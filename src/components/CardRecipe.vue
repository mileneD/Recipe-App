<template>
    <section class="card">
      <v-card text="...">
        <v-card-title>{{ recipe.title }}</v-card-title>
        <v-card-text>
          <img :src="recipe.image" :alt="recipe.title" />
        </v-card-text>
      </v-card>
    </section>
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
