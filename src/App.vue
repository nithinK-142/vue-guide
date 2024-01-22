<template>
  <div>
    <h1>{{ greeting }}</h1>
    <p>Counter: {{ counter }}</p>
    <p>Reversed Greeting: {{ reversedGreeting }}</p>
    <button @click="incrementCounter">Increment Counter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'John',
      counter: 0,
      reversedGreeting: '',
    };
  },
  computed: {
    greeting() {
      return `Hello, ${this.name}!`;
    },
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    reverseName() {
      this.reversedGreeting = this.name.split('').reverse().join('');
    },
  },
  created() {
    console.log('Component created');
    this.reverseName();
  },
  mounted() {
    console.log('Component mounted');
  },
  destroyed() {
    console.log('Component destroyed');
  },
  watch: {
    counter(newVal, oldVal) {
      console.log(`Counter changed from ${oldVal} to ${newVal}`);
      this.reverseName();
    },
    name(newVal, oldVal) {
      console.log(`Name changed from ${oldVal} to ${newVal}`);
      this.reverseName();
    },
  },
};
</script>
