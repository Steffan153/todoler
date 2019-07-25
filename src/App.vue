<template>
  <div id="app">
    <h1>todoler</h1>
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
  name: "app",
  components: {
    Todos
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  background-color: #d56bfc;
  font-family: Cantarell, sans-serif;
}
</style>

<style scoped>
h1 {
  font-size: 3.5rem;
  text-align: center;
}
</style>
