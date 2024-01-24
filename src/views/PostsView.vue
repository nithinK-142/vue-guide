<template>
  <div>
    <h1>Posts</h1>
    <input type="text" placeholder="add a post" />
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/post-details/${post.id}`">{{
          post.title
        }}</RouterLink>
      </li>
    </ul>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const posts = ref([
  {
    id: "id1",
    title: "Post 1",
  },
  {
    id: "id2",
    title: "Post 2",
  },
  {
    id: "id3",
    title: "Post 3",
  },
]);
</script>

<style scoped>
input {
  padding: 6px 16px;
  font-size: 1.2em;
}

li {
  list-style: circle;
  font-size: 1.4em;
  padding-block: 6px;
}
</style>
