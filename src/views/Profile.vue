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
                <p class="lead text-muted">{{ user?.picture }}</p>
                <p class="lead text-muted">{{ user?.nickname }}</p>
                {{ user }}

                <v-btn color="primary" @click="openEditProfileDialog">Modifier le profil</v-btn>
            </v-col>
        </v-row>
        <v-divider class="my-4"></v-divider>
        <!-- Dialogue pour modifier le profil -->
        <DialogProfile />
    </v-container>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
import MainNav from '../components/MainNav.vue';
import DialogProfile from '../components/DialogProfile.vue';
import { useDialogStore } from '../stores/userStore.js';

const { user } = useAuth0();
const dialogStore = useDialogStore();

const openEditProfileDialog = () => {
    dialogStore.openDialog();
};
</script>

<style scoped>
.profile-container {
    max-width: 900px;
    margin: 0 auto;
}

.profile-picture {
    border-radius: 50%;
    border: 4px solid #f5f5f5;
}

.profile-header {
    margin-bottom: 30px;
}

.profile-btn {
    text-transform: uppercase;
    font-weight: bold;
    padding: 12px 24px;
}
</style>