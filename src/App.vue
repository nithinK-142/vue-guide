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
        to="/posts"
        :class="{ 'active-link': $route.path === '/posts' }"
        >Posts</RouterLink
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

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
}

nav {
  font-size: 1.2em;
  padding-inline: 1rem;
}
</style>
