<template>
  <footer>
    <div>{{ activeRemaining }} items left</div>
    <div>
      <span :class="state == 'all' ? 'active' : ''" @click="$emit('state-change', 'all')">All</span>
      <span
        :class="state == 'active' ? 'active' : ''"
        @click="$emit('state-change', 'active')"
      >Active</span>
      <span
        :class="state == 'complete' ? 'active' : ''"
        @click="$emit('state-change', 'completed')"
      >Completed</span>
    </div>
    <Button :click="() => $emit('clear-completed')">Clear completed</Button>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  border-top: 1px solid #ccc;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  color: #666;
  padding: 10px;
  & > div > span {
    padding: 6px;
    border-radius: 6px;
    margin-right: 5px;
    box-sizing: border-box;
    cursor: pointer;
    &:last-child {
      margin-right: 0 !important;
    }
    &.active,
    &:hover {
      border: 1px solid #ccc;
      padding: 5px;
    }
  }
  a {
    text-decoration: none;
    font: inherit;
    color: white;
    padding: 3px 20px;
    background-color: blueviolet;
    border-radius: 10px;
    &:hover {
      background-color: purple;
    }
  }
}
</style>

<script>
import Button from "./Button.vue";

export default {
  name: "to-do-list-footer",
  props: ["activeRemaining", "state"],
  components: {
    Button
  }
};
</script>
