<template>
  <button :type="type" @click="click" :class="blue ? 'btn blue' : 'btn'">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      default: "button",
      type: String,
      required: false
    },
    click: {
      default: () => {},
      type: Function,
      required: false
    },
    blue: {
      default: false,
      type: Boolean,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
button.btn {
  cursor: pointer;
  text-decoration: none;
  font: inherit;
  color: white;
  padding: 3px 20px;
  background-color: blueviolet;
  border-radius: 10px;
  transition: background-color 0.3s;
  border: none;
  outline: none;
  &:hover {
    background-color: purple;
  }
  &.blue {
    background-color: blue;
    border: 2px solid darkblue;
    &:hover {
      background-color: darkblue;
    }
  }
}
</style>
