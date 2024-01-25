<template>
  <main>
    <h1>Vue Demo App</h1>
    <button @click="showModal = true">Show Modal</button>
    <teleport to="body">
      <div v-if="showModal" class="modal">
        <h2>This is the modal.</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
          similique eveniet quia magnam laudantium voluptatibus.
        </p>
        <button @click="showModal = false">Hide Modal</button>
      </div>
    </teleport>
  </main>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
</script>

<style>
main {
  text-align: center;
}

button {
  margin-top: 2rem;
  padding: 6px 16px;
}

.modal {
  background-color: beige;
  padding: 12px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  text-align: center;
  padding-top: 2rem;
}

h2 {
  padding-block: 1rem;
}
</style>
