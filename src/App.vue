<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="flex flex-col items-center">
    <h1>Vue Guide</h1>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/accordion">Accordion</RouterLink>
        <RouterLink to="/button">Button</RouterLink>
        <RouterLink to="/modal">Modal</RouterLink>
      </nav>
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;

  display: flex;
}
nav a.router-link-exact-active {
  background-color: hsla(160, 100%, 37%, 0.2);
}

nav a {
  display: inline-block;
  padding: 0.3rem 1rem;
  border-left: 1px solid var(--color-border);
  border-radius: 4px;
}

nav a:first-of-type {
  border: 0;
}
</style>
