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
@font-face {
  font-family: 'Cantarell';
  font-style: normal;
  font-weight: 400;
  src: local('Cantarell Regular'), local('Cantarell-Regular'), url(https://fonts.gstatic.com/s/cantarell/v9/B50NF7ZDq37KMUvlO015jKJrPqySLQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
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
