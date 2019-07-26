<template>
  <div>
    <Button
      :click="() => signup()"
      v-if="!logged"
    >Login With GitHub (this will create a new account if you don't have one yet 😉</Button>
  </div>
</template>

<script>
import Button from "./Button.vue";

import firebase from "firebase/app";
import "firebase/auth";

const provider = new firebase.auth.GithubAuthProvider();

export default {
  name: "signup",
  props: ["logged"],
  methods: {
    signup() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result);
          this.$emit("login", result);
        })
        .catch(error => {
          console.warn(error);
        });
    }
  },
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  margin-top: 20px;
}
</style>
