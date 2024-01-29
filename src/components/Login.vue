<template>
  <button @click="handleClick">{{ buttonText }}</button>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useAuthStore();
const { toggleAuth } = store;

const { isAuthenticated } = storeToRefs(store);

const buttonText = computed(() => (isAuthenticated.value ? "Logout" : "Login"));

const handleClick = () => {
  toggleAuth();
  if (isAuthenticated.value) router.push("/");
  else router.push("/login");
};
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
