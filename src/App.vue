<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

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
    to: "/contact-us",
    title: "Contact Us",
  },
]);
</script>

<template>
  <main class="flex flex-col items-center relative">
    <h1 class="text-xl">Vue Guide</h1>
      <button
        @click="toggleDark()"
        class="px-3 py-1 rounded-full mb-4 text-black/60 dark:text-white text-3xl absolute right-8 top-[6px]"
      >
        {{ isDark ? "&#x2600;" : "&#x263E;" }}
      </button>
    <nav>
      <ul class="flex">
        <li v-for="link in navLinks" :key="link.title">
          <RouterLink
            :to="`${link.to}`"
            :class="{
              'active-link': $route.path === link.to,
            }"
            class="px-2 py-1 mx-1 rounded-md"
            >{{ link.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </main>
  <RouterView />
</template>

<style>
.active-link {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
