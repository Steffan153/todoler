<template>
  <div id="app">
    <h1>todoler</h1>
    <Todos />
    <div class="banner" v-show="banner">
      To use this app offline and get here with a click of a button, install our free app:
      <button @click="banner.prompt()">Install</button>
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
  name: "app",
  data () {
    return {
      banner: null
    };
  },
  components: {
    Todos
  },
  mounted () {
    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      this.banner = e;
    }.bind(this));
  }
};
</script>

<style>
@font-face {
  font-family: 'Cantarell';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
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

<style lang="scss" scoped>
h1 {
  font-size: 3.5rem;
  text-align: center;
}
.banner {
  background-color: blueviolet;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  color: white;
  button {
    cursor: pointer;
    text-decoration: none;
    font: inherit;
    color: white;
    padding: 3px 20px;
    background-color: blue;
    border-radius: 10px;
    transition: background-color .3s;
    border: 2px solid darkblue;
    outline: none;
    &:hover {
      background-color: darkblue;
    }
  }
}
</style>
