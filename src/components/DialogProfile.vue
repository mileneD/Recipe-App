<template>
    <v-dialog v-model="dialogStore.isEditDialogOpen" width="500px">
      <v-card>
        <v-card-title>Modifier le profil</v-card-title>
        <v-card-text >
          <!-- Champs existants -->
          <v-text-field label="Nom" v-model="newName" />
          <v-text-field  label="Photo de profil" v-model="newPicture" />

          <!-- Nouveaux champs du JSON -->
          <v-text-field label="Email" v-model="newEmail" />
          <v-text-field label="Numéro de téléphone" v-model="newPhoneNumber" />
          <v-text-field label="Prénom" v-model="givenName" />
          <v-text-field label="Nom de famille" v-model="familyName" />
          <v-text-field label="Surnom" v-model="nickname" />
          <v-checkbox label="Bloqué" v-model="blocked" />
          <v-checkbox label="Email vérifié" v-model="emailVerified" />
          <v-checkbox label="Téléphone vérifié" v-model="phoneVerified" />
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

  const { user, getAccessTokenSilently } = useAuth0();
  const dialogStore = useDialogStore();

  // Variables pour gérer les nouvelles données
  const newName = ref('');
  const newPicture = ref('');
  const newEmail = ref('');
  const newPhoneNumber = ref('');
  const emailVerified = ref(false);
  const phoneVerified = ref(false);
  const givenName = ref('');
  const familyName = ref('');
  const nickname = ref('');
  const blocked = ref(false);
  const verifyEmail = ref(false);
  const verifyPhoneNumber = ref(false);

  // Remplir les champs avec les valeurs existantes
  onMounted(() => {
    newName.value = user.value?.name || '';
    newPicture.value = user.value?.picture || '';
    newEmail.value = user.value?.email || '';
    newPhoneNumber.value = user.value?.phone_number || '';
    emailVerified.value = user.value?.email_verified || false;
    phoneVerified.value = user.value?.phone_verified || false;
    givenName.value = user.value?.given_name || '';
    familyName.value = user.value?.family_name || '';
    nickname.value = user.value?.nickname || '';
    blocked.value = user.value?.blocked || false;
  });

  // Fonction pour sauvegarder les modifications du profil
  const saveProfile = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: 'https://dev-fl5og68se0rlagw7.us.auth0.com/api/v2/',
        scope: 'update:users update:current_user_metadata'
      });

      const response = await fetch(`https://dev-fl5og68se0rlagw7.us.auth0.com/api/v2/users/${user.value.sub}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newName.value,
          picture: newPicture.value,
          email: newEmail.value,
          phone_number: newPhoneNumber.value,
          given_name: givenName.value,
          family_name: familyName.value,
          nickname: nickname.value,
          blocked: blocked.value,
          verify_email: verifyEmail.value,
          verify_phone_number: verifyPhoneNumber.value
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour du profil');
      }

      dialogStore.closeDialog();
      alert('Profil mis à jour avec succès');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
    }
  };
  </script>
