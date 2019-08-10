<template>
  <div class="signup">
    <Button :click="() => signup()">Signup With GitHub</Button>
    <p class="text-hr">Or signup with email &amp; password:</p>
    <div>
      <div>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" v-model="password" />
      </div>
      <div class="buttons">
        <Button :click="() => emailSignup()">Sign up</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import firebase from '../init-firebase';

const provider = new firebase.auth.GithubAuthProvider();

export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result);
          this.$store.commit("setAuth", result);
          this.$router.replace("/");
        })
        .catch(error => {
          console.warn(error);
          alert("Error: " + error.message);
        });
    },
    emailLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log(res);
          this.$store.commit("setAuth", res);
          this.$router.replace("/");
        })
        .catch(err => {
          console.warn(err);
          alert("Error: " + err.message);
        });
    },
    emailSignup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log(res);
          this.$store.commit("setAuth", res);
          this.$router.replace("/");
        })
        .catch(err => {
          console.warn(err);
          alert("Error: " + err.message);
        });
    }
  },
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.signup {
  text-align: center;
  margin-top: 20px;
}

.text-hr {
  border-top: 2px solid #fff;
  padding-top: 10px;
}

input {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  margin-left: 10px;
  outline: none;
  margin-bottom: 7px;
  transition: box-shadow 0.3s;
  &:focus {
    box-shadow: 0 1px 10px #999;
  }
}

.buttons {
  margin-top: 10px;
}
</style>
