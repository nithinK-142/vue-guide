<template>
  <main>
    <h1>Vue Demo App</h1>
    <input ref="myInput" />
    <button @click="focusInput">Focus Input</button>
  </main>
</template>

<script setup>
import { ref, nextTick } from "vue";

const myInput = ref(null);

const focusInput = () => {
  nextTick(() => {
    myInput.value.focus();
  });
};
</script>
