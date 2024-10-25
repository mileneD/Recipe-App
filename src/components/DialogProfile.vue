<template>
    <v-dialog v-model="dialogStore.isEditDialogOpen" width="500px">
        <v-card>
            <v-card-title>Modifier le profil</v-card-title>
            <v-card-text>
                <!-- Champs existants -->
                <v-text-field label="Nom" v-model="newName" />
                <v-text-field label="Photo de profil" v-model="newPicture" />
                <v-text-field label="Surnom" v-model="nickname" />
            </v-card-text>
            <v-card-actions>
                <v-btn color="blue darken-1" text @click="saveProfile">Sauvegarder</v-btn>
                <v-btn color="blue darken-1" text @click="dialogStore.closeDialog">Annuler</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import { useDialogStore } from '../stores/userStore.js';
import axios from 'axios';

// Auth0 et Dialog Store
const { user, getAccessTokenSilently } = useAuth0();
const dialogStore = useDialogStore();

// Variables pour gérer les nouvelles données
const newName = ref('');
const newPicture = ref('');
const nickname = ref('');

// Remplir les champs avec les valeurs existantes
onMounted(() => {
    newName.value = user.value?.name || '';
    newPicture.value = user.value?.picture || '';
    nickname.value = user.value?.nickname || '';
});

// Fonction pour sauvegarder les modifications du profil
const saveProfile = async () => {
    try {
        const accessToken = await getAccessTokenSilently({
            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            scope: 'update:users update:users_app_metadata update:current_user_metadata'
        });

        // ID utilisateur
        const userId = user.value.sub;

        // Requête PATCH pour mettre à jour le profil
        const response = await axios.patch(
            `${import.meta.env.VITE_AUTH0_AUDIENCE}/users/${userId}`,
            {
                name: newName.value,
                picture: newPicture.value,
                nickname: nickname.value,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('Profil mis à jour avec succès:', response.data);
        alert('Profil mis à jour avec succès');
        dialogStore.closeDialog();
    } catch (error) {
        console.error('Erreur lors de la mise à jour du profil:', error.response?.data || error.message);
    }
};
</script>