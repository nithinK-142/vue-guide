<template>
  <button @click="toggleAuth">{{ buttonText }}</button>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useAuthStore();
const { toggleAuth } = store;

const { isAuthenticated } = storeToRefs(store);

const buttonText = computed(() => (isAuthenticated.value ? "Logout" : "Login"));
</script>

<style scoped>
button {
  padding: 4px 10px;
  font-size: 1.2em;
  cursor: pointer;
}
button:focus {
  scale: 0.98;
}
</style>
