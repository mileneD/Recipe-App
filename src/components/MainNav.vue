<template>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon color="primary"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Find a recipe</v-app-bar-title>
        <input v-model="searchQuery" placeholder="Search for recipes" />
      <button @click="searchRecipes">Search</button>
    </v-app-bar>
</template>

<script>

export default {
    name: 'MainNav',


}
</script>