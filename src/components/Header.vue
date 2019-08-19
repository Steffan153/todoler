<template>
  <header>
    <nav>
      <div>
        <router-link active-class="active" to="/" exact>Home</router-link>
      </div>
      <div class="right" v-if="!user">
        <router-link active-class="active" to="/signup">Signup</router-link>
      </div>
      <div class="right" v-if="!user">
        <router-link active-class="active" to="/login">Login</router-link>
      </div>
      <div class="right dropdown" v-if="user">
        <div class="dropdown-start">
          <img
            :src="user.photoURL || 'https://i.imgur.com/FdH9pPU.png'"
            alt="User photo"
            class="profile-pic"
          />
          <span class="caret"></span>
        </div>
        <div class="dropdown-menu">
          <a href="#" class="dropdown-item">Settings</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  nav {
    width: 100%;
    background-color: blueviolet;
    top: 0;
    left: 0;
    position: fixed;
    padding: 13px 25px;
    box-sizing: border-box;
    > div {
      margin-right: 25px;
      display: inline-block;
      a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.5);
        &.active,
        &:hover,
        &:active {
          color: white;
        }
      }
      &.right {
        float: right;
        margin-right: 0;
        margin-left: 25px;
      }
    }
    .profile-pic {
      height: 20px;
      border-radius: 5px;
    }
    .right:last-child {
      margin-right: 0 !important;
    }
  }
}
.dropdown {
  position: relative;
}
.dropdown-start {
  cursor: pointer;
}
.dropdown-menu {
  display: none;
  position: absolute;
  top: 20px;
  right: 0;
  background-color: white;
  color: black;
  padding: 10px 0;
  border-radius: 10px;
}
.dropdown-item {
  color: black;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #eee;
    color: black;
  }
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.caret {
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #fff;
  margin-left: 5px;
  display: inline-block;
  height: 3px;
}
</style>
