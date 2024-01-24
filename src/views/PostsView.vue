<template>
  <div>
    <h1>Posts</h1>
    <input type="text" placeholder="add a post" />
    <ul>
      <li><RouterLink to="/post-details/id1">Post 1</RouterLink></li>
      <li><RouterLink to="/post-details/id2">Post 2</RouterLink></li>
      <li><RouterLink to="/post-details/id3">Post 3</RouterLink></li>
    </ul>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
input {
  padding: 6px 16px;
  font-size: 1.2em;
}

li{
  list-style: circle;
  font-size: 1.4em;
  padding-block: 6px;
}
</style>
