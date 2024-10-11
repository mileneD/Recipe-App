<template>
    <div>

        <v-app-bar :elevation="2">
            <v-app-bar-title>Find a recipe</v-app-bar-title>
            <input v-model="searchQuery" placeholder="Search for recipes" />
            <v-btn @click="handleSearch">Search</v-btn>
        </v-app-bar>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'MainNav',
    props: {
        searchRecipes: {
            type: Function,
            required: true,
        },
    },
    setup(props) {
        const searchQuery = ref('');

        const handleSearch = () => {
            props.searchRecipes(searchQuery.value);
            searchQuery.value = ''; // Réinitialise le champ de recherche après la soumission
        };

        return {
            searchQuery,
            handleSearch,
        };
    }
}
</script>