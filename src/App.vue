<template>
  <main>
    <h1>Vue Demo App</h1>
    <input ref="myInput" v-inputfocus />
  </main>
</template>

<script setup>
const vInputfocus = {
  mounted: (element) => {
    element.focus();
  },
};
</script>
