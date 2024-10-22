<template>
    <div class="container">
      <div class="row align-items-center profile-header">
        <MainNav />
        <div class="col-md-2 my-3">
          <img
            :src="user?.picture"
            alt="User's profile picture"
            class="rounded-circle img-fluid profile-picture"
          />
        </div>
        <div class="col-md text-center text-md-left">
          <h2>{{ user?.name }}</h2>
          <p class="lead text-muted">{{ user?.email }}</p>
        </div>
      </div>
    </div>
  </template>

  <script>
  import { defineComponent } from 'vue';
  import MainNav from './MainNav.vue';

  export default defineComponent({
    name: 'profile',
    components: {MainNav},
    data() {
      return {
        user: this.$auth0.user
      };
    }
  });
  </script>