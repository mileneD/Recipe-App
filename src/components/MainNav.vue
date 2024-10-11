<template>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon color="primary"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Find a recipe</v-app-bar-title>

    </v-app-bar>
</template>

<script>

export default {
    name: 'MainNav',


}
</script>