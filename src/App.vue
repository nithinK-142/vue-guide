<template>
  <main>
    <h1>Vue Demo App</h1>
    <nav>
      <ul>
        <li v-for="link in navLinks" :key="link.title">
          <RouterLink
            :to="`${link.to}`"
            :class="{ 'active-link': $route.path === link.to }"
            >{{ link.title }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </main>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const navLinks = ref([
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/login",
    title: "Login",
  },
]);
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
}

nav ul {
  display: flex;
}

li {
  list-style: none;
  padding-inline: 0.4rem;
}
</style>
