<template>
    <v-container fluid fill-height class="container">
      <router-link :to="{ name: 'home'}" class="btn-back mt-4">Back to Home Page</router-link>

      <v-card class="login-card">
        <v-toolbar class="header" :dark="true">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="mdi-email"
              type="text"
              v-model="user.email"
              label="E-mail"
              outlined
              clearable
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-lock"
              type="password"
              v-model="user.password"
              label="Password"
              outlined
              clearable
            ></v-text-field>
          </v-form>
          <v-alert type="error" v-if="errorLogin" class="error-alert">
            Error in email or password
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn class="new-user-btn" @click="login">Create account</v-btn>
          <v-btn class="login-btn" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>

  <script>
  import { useAuth0 } from '@auth0/auth0-vue';
  import { useRecipeStore } from "../stores/recipeStore";
  import { ref } from "vue";

  export default {
    setup() {
      const { loginWithRedirect } = useAuth0();
      const recipeStore = useRecipeStore();
      const user = ref({});
      const errorLogin = ref(false); // Assurez-vous que c'est un ref

      return {
        login: () => {
          loginWithRedirect();
        },
        recipeStore,
        user,
        errorLogin
      };
    }
  };
  </script>

  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto; /* Centrer le conteneur */
  }

  .login-card {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px; /* Coins arrondis pour la carte */
  }

  .header {
    background-color: #b5e2fa; /* Couleur de fond du header */
  }

  .btn-back {
    display: inline-block;
    background-color: #0fa3b1; /* Couleur de fond du bouton Retour */
    color: #f9f7f3; /* Couleur du texte */
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s;
  }

  .btn-back:hover {
    background-color: #0d8e99; /* Teinte plus foncée au survol */
  }

  .login-btn {
    background: linear-gradient(90deg, #0fa3b1, #0fa3b1); /* Dégradé */
    color: #f9f7f3; /* Couleur du texte */
    border-radius: 20px; /* Coins arrondis */
    padding: 10px 20px;
    transition: background-color 0.3s, transform 0.2s;
  }

  .login-btn:hover {
    transform: translateY(-2px); /* Légère élévation au survol */
  }

  .new-user-btn {
    background: linear-gradient(90deg, #eddea4, #eddea4); /* Dégradé */
    color: #000000; /* Couleur du texte */
    border-radius: 20px; /* Coins arrondis */
    padding: 10px 20px;
    transition: background-color 0.3s, transform 0.2s;
  }

  .new-user-btn:hover {
    transform: translateY(-2px); /* Légère élévation au survol */
  }

  .error-alert {
    margin-top: 10px; /* Espace entre le champ et l'alerte */
  }
  </style>
