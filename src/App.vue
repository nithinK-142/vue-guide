<script setup>
import { useCounterStore } from "./stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();
store.count++;

// destructuring logic
// for state we use storeToRefs, it'll create refs for every reactive property
const { count, doubleCount, oddEven } = storeToRefs(store);
console.log(oddEven.value);
// for actions we can directly desturucture
const { increment, decrement, waitAndAdd } = store;
</script>
<template>
  <main>
    <div>
      <h1>Using Store</h1>
      <h2>
        Count is : {{ store.count }} which is {{ store.oddEven.isSingleCount }}
      </h2>
      <h2>
        Double Count is : {{ store.doubleCount }} which is
        {{ store.oddEven.isDoubleCount }}
      </h2>
      <button @click="store.increment(1)">Increment</button>
      <button @click="store.decrement">Decrement</button>
      <button @click="store.waitAndAdd">Wait n Increment</button>
    </div>
    <br />
    <div>------------------------------------------------</div>
    <!-- destructured -->
    <div>
      <h1>Using destructured store</h1>
      <h2>Count is : {{ count }} which is {{ oddEven.isSingleCount }}</h2>
      <h2>Double Count is : {{ doubleCount }}</h2>
      <button @click="increment(1)">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="waitAndAdd">Wait n Increment</button>
    </div>
  </main>
</template>
