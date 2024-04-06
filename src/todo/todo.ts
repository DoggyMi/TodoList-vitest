import { defineStore } from "pinia";
import { ref } from "vue";

export interface TodoItem {
  title: string;
  completed: boolean;
  id: string;
}

export const useTodoStore = defineStore("todo", () => {
  const todoList = ref<TodoItem[]>([]);
  const addTodo = (title: string) => {
    if (title.startsWith("reverse:")) {
      title = title.slice("reverse:".length).split("").reverse().join("");
    }
    todoList.value.push({
      title,
      completed: false,
      id: crypto.randomUUID(),
    });
  };
  return { todoList, addTodo };
});
