<script setup>
import { useCounterStore } from "./stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();
store.count++;

// destructuring logic
// for state we use storeToRefs, it'll create refs for every reactive property
const { count, doubleCount } = storeToRefs(store);
// for actions we can directly desturucture
const { increment, decrement, waitAndAdd } = store;
</script>
<template>
  <main>
    <div>
      <h1>Using Store</h1>
      <h2>Count is : {{ store.count }}</h2>
      <h2>Double Count is : {{ store.doubleCount }}</h2>
      <button @click="store.increment(1)">Increment</button>
      <button @click="store.decrement">Decrement</button>
      <button @click="store.waitAndAdd">Wait n Increment</button>
    </div>

    <!-- destructured -->
    <div>
      <h1>Using destructured store</h1>
      <h2>Count is : {{ count }}</h2>
      <h2>Double Count is : {{ doubleCount }}</h2>
      <button @click="increment(1)">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="waitAndAdd">Wait n Increment</button>
    </div>
  </main>
</template>
