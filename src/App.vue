<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "Cantarell";
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: local("Cantarell Regular"), local("Cantarell-Regular"),
    url(https://fonts.gstatic.com/s/cantarell/v9/B50NF7ZDq37KMUvlO015jKJrPqySLQ.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  background-color: #eab0ff;
  font-family: Cantarell, sans-serif;
}
.container {
  margin: 70px auto;
  max-width: 95vw;
}
</style>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
