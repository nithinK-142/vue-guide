import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      isAuthenticated: false,
    };
  },
  actions: {
    toggleAuth() {
      this.isAuthenticated = !this.isAuthenticated;
    },
  },
});
