<template>
  <div class="home">
    <h1>todoler</h1>
    <Todos />
    <div class="banner" v-show="banner">
      To use this app offline and get here with a click of a button, install our free app:
      <button
        @click="banner.prompt()"
      >Install</button>
    </div>
  </div>
</template>

<script>
import Todos from "../components/Todos.vue";

export default {
  name: "home",
  data() {
    return {
      banner: null
    };
  },
  components: {
    Todos
  },
  mounted() {
    window.addEventListener(
      "beforeinstallprompt",
      function(e) {
        e.preventDefault();
        this.banner = e;
      }.bind(this)
    );
  }
};
</script>

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
}
</style>
