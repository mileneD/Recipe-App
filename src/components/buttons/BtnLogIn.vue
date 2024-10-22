<template>
    <v-btn class="btn-login" @click="handleLogin">Log In</v-btn>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect } = useAuth0()

const handleLogin = () => {
    loginWithRedirect({
        appState: {
            target: '/profile'
        }
    })
}
</script>

<style scoped>
.btn-login {
  background: #006d77;
  color: #f9f7f3;
  border-radius: 20px;
  padding: 10px 20px;
  transition: background-color 0.3s, transform 0.2s;
}
</style>