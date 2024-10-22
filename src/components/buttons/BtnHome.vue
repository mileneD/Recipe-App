<template>
    <router-link :to="{ name: 'home' }" class="btn-back">Back to Home</router-link>
</template>

<script>

export default {
    name: "BtnHome",
    setup() {

    },
}
</script>

<style>
.btn-back {
    display: inline-block;
    background-color: #0fa3b1;
    color: #f9f7f3;
    border: none;
    border-radius: 5px;
    padding: 10px 10px;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 16px;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s;
}
</style>