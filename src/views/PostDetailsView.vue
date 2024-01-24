<template>
  <div>
    <h1>This is the post {{ $route.params.id }}</h1>
    <button><RouterLink to="/posts">Back</RouterLink></button>
  </div>
</template>

<style scoped>
button{
  padding: 4px 8px;
  font-size: 1.4em;
  background-color: black;
  border-radius: 8px;
}
</style>