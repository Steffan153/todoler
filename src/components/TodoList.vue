<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <div>
        <span @click="toggleComplete(todo)">
          <font-awesome-icon :icon="todo.complete ? ['fas', 'check-square'] : ['far', 'check-square']"></font-awesome-icon>
        </span>
        {{ todo.name }}
      </div>
      <div>
        <a href="javascript:void(0);" @click="editTodo(todo)"><font-awesome-icon icon="pencil-alt"></font-awesome-icon></a>
        <a href="javascript:void(0);" @click="deleteTodo(todo)"><font-awesome-icon icon="trash"></font-awesome-icon></a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "todolist",
  props: ["todos"],
  methods: {
    deleteTodo (todo) {
      this.$emit('delete-todo', todo);
    },
    editTodo (todo) {
      let text = prompt("Please enter a new name for this task:", todo.name);
      if (text) {
        this.$emit('edit-todo', {
          ...todo,
          newText: text
        });
      }
    },
    toggleComplete (todo) {
      this.$emit('toggle-complete', todo);
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  // margin-bottom: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin: 0;
    padding: 10px;
    border-top: 1px solid #ccc;
    display: flex;
    flex-flow: row nowrap;
    font-size: 1.2rem;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
      color: #555;
      margin-left: 15px;
      &:hover {
        color: black;
      }
    }
    span {
      cursor: pointer;
    }
  }
}
</style>
