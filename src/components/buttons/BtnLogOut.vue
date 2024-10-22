<template>
    <v-btn class="btn-logout" @click="handleLogout">Log Out</v-btn>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { logout } = useAuth0()

const handleLogout = () => {
    logout({
        logoutParams: {
            returnTo: window.location.origin,
        },
    })
}
</script>

<style scoped>
.btn-logout {
    background: linear-gradient(90deg, #0fa3b1, #0fa3b1);
    color: #f9f7f3;
    border-radius: 20px;
    padding: 10px 20px;
    transition: background-color 0.3s, transform 0.2s;
}
</style>