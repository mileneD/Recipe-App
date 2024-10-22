<template>
    <v-container class="profile-container">
        <MainNav />
        <v-row class="align-items-center profile-header">
            <v-col cols="12" md="4" class="text-center">
                <v-img :src="user?.picture" alt="User's profile picture"
                    class="rounded-circle img-fluid profile-picture" height="150" width="150" contain />
            </v-col>
            <v-col cols="12" md="8" class="text-center text-md-left">
                <h2>{{ user?.name }}</h2>
                <p class="lead text-muted">{{ user?.email }}</p>
                <v-btn color="primary" @click="editProfile">Modifier le profil</v-btn>
            </v-col>
        </v-row>
        <v-divider class="my-4"></v-divider>
        <v-row>
            <v-col>
                <h3>Informations Supplémentaires</h3>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle>{{ user?.created_at }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Rôle</v-list-item-title>
                            <v-list-item-subtitle>{{ user?.role || 'Utilisateur' }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <!-- Ajoutez d'autres informations utilisateur ici -->
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import MainNav from './MainNav.vue';
import { useAuth0 } from '@auth0/auth0-vue'; // Assurez-vous d'importer useAuth0

// Utiliser le hook useAuth0 pour accéder aux informations Auth0
const { user, isAuthenticated, isLoading } = useAuth0();
console.log(user)
</script>