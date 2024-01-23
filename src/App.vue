<template>
  <main>
    <h1>Vue Demo App</h1>
    <nav>
      <RouterLink to="/" :class="{ 'active-link': $route.path === '/' }"
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        :class="{ 'active-link': $route.path === '/about' }"
        >About</RouterLink
      >
      <RouterLink
        to="/contact-us"
        :class="{ 'active-link': $route.path === '/contact-us' }"
        >Contact Us</RouterLink
      >
    </nav>
  </main>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.active-link {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
