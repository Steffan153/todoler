<template>
  <footer>
    <div>{{ activeRemaining }} items left</div>
    <div>
      <span :class="state == 'all' ? 'active' : ''" @click="$emit('state-change', 'all')">All</span>
      <span :class="state == 'active' ? 'active' : ''" @click="$emit('state-change', 'active')">Active</span>
      <span :class="state == 'complete' ? 'active' : ''" @click="$emit('state-change', 'completed')">Completed</span>
    </div>
    <a href="javascript:void(0);" @click="$emit('clear-completed')">Clear completed</a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  border-top: 1px solid #ccc;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: #666;
  padding: 10px;
  &> div > span {
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
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

<script>
export default {
  name: 'to-do-list-footer',
  props: ['activeRemaining', 'state']
};
</script>