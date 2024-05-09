<template>
  <div class="container pa-2 mx-auto max-w-1/2">
    <div class="cards p-2 mt-2 border rounded">
      <h1>My Todos</h1>
      <div class="">
        <input type="text" placeholder="Add a new todo" v-model="input">
        <button @click="handleClick" class="rounded bg-green-300 px-4">Add</button>
      </div>
      <div v-for="todo in todos" :key="todo.id">
        <h4 @click="() => updateTodo(todo.id)" :class="todo.completed ? 'complete' : null">{{todo.item}}</h4>
        <p @click="() => deleteTodo(todo.id)">x</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const input = ref("")
const { todos, addToDo, updateTodo, deleteTodo } = useTodos()

const handleClick = () => {
  addToDo(input.value)
  input.value = ""
}
</script>

<style scoped>
.complete {
  text-decoration: line-through;
}
</style>