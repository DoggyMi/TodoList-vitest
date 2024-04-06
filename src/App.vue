<script setup lang="ts">
import { useTodoStore } from "./todo/todo";
const todoStore = useTodoStore();
const todoList = todoStore.todoList;
const addTodo = (e: any) => {
  todoStore.addTodo(e.target.value);
}
</script>

<template>
  <input type="text" :onchange="addTodo">
  <ul>
    <li v-for="(item) in todoList" :key="item.id">{{ item.title }} == {{ item.id }}</li>
  </ul>
</template>

<style scoped></style>
