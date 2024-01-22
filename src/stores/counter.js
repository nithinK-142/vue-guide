import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  actions: {
    increment(val = 1) {
      this.count += val;
    },
    decrement() {
      if (this.count > 0) this.count--;
      else alert("count cannot be zero!");
    },
    async waitAndAdd() {
      setTimeout(() => {
        this.count++;
      }, 2000);
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});