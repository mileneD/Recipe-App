<template>
  <v-btn class="btn-register mr-2" @click="handleRegister">
    Sign Up
  </v-btn>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect } = useAuth0();

const handleRegister = () => {
  loginWithRedirect({
    appState: {
      target: '/profile',
    },
    authorizationParams: {
      screen_hint: 'signup',
    },
  });
};
</script>

<style scoped>
.btn-register {
  background: linear-gradient(90deg, #0fa3b1, #0fa3b1);
  color: #f9f7f3;
  border-radius: 20px;
  padding: 10px 20px;
  transition: background-color 0.3s, transform 0.2s;
}
</style>