<template>
  <div class="todos">
    <input type="text" placeholder="What needs to be done? Press enter to add a new task." @keyup.enter="addTodo" v-model="val" />
    <TodoList :todos="showTodos" @delete-todo="deleteTodo($event)" @edit-todo="editTodo($event)" @toggle-complete="toggleCompleteTodo($event)" />
    <TodoListFooter :activeRemaining="activeRemaining" @state-change="todoState = $event" :state="todoState" @clear-completed="clearCompleted" />
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import TodoListFooter from './TodoListFooter.vue';

export default {
  name: "todos",
  components: {
    TodoList,
    TodoListFooter
  },
  data () {
    return {
      todos: [{ name: "Laundry", id: 1, complete: false }],
      val: "",
      todoState: 'all'
    };
  },
  computed: {
    activeRemaining () {
      return this.todos.map(x => !x.complete).filter(Boolean).length;
    },
    showTodos () {
      if (this.todoState === 'all') {
        return this.todos;
      }
      if (this.todoState === 'active') {
        return this.todos.filter(x => !x.complete);
      }
      if (this.todoState === 'completed') {
        return this.todos.filter(x => x.complete);
      }
    }
  },
  methods: {
    saveTodos () {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    addTodo () {
      this.todos.push({
        name: this.val,
        id: this.todos.length + 1,
        complete: false
      });
      this.val = '';
      this.saveTodos();
    },
    deleteTodo (todo) {
      this.todos.splice(this.getTodoIndex(todo), 1);
      for (let i = 0; i < this.todos.length; i++) {
        this.todos[i].id = i + 1;
      }
      this.saveTodos();
    },
    editTodo (todo) {
      this.todos[this.getTodoIndex(todo)].name = todo.newText;
      this.saveTodos();
    },
    getTodoIndex (todo) {
      return this.todos.findIndex(item => item.name == todo.name && item.id == todo.id);
    },
    toggleCompleteTodo (todo) {
      let item = this.todos[this.getTodoIndex(todo)];
      item.complete = !item.complete;
      this.saveTodos();
    },
    clearCompleted () {
      this.todos = this.todos.filter(x => !x.complete);
      this.saveTodos();
    }
  },
  created () {
    const ltds = localStorage.getItem('todos');
    if (ltds) {
      this.todos = JSON.parse(ltds);
    }
  }
};
</script>

<style lang="scss" scoped>
.todos {
  background-color: white;
  max-width: 95vw;
  width: 550px;
  padding: 0;
  margin: auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

input {
  width: 100%;
  border: 1px solid #ddd;
  border-bottom: none;
  padding: 10px;  
  box-sizing: border-box;
  outline: none;
  transition: box-shadow 0.3s;
  &:focus {
    box-shadow: 0 1px 10px #ccc;
  }
}

.todos,
input {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
