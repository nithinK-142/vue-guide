<template>
  <main>
    <h1>Vue Demo App</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact-us">Contact Us</RouterLink>
    </nav>
  </main>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
</style>
