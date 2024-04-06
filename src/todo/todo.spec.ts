import { beforeEach, describe, expect, it } from "vitest";
import { useTodoStore } from "./todo";
import { createPinia, setActivePinia } from "pinia";
describe("Todo", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should be able to add a todo", () => {
    const todoStore = useTodoStore();
    todoStore.addTodo("heha");
    expect(todoStore.todoList[0].title).toEqual("heha");
  });

  it("should be able to add a reverse todo", () => {
    const todoStore = useTodoStore();
    todoStore.addTodo("reverse:heha");
    expect(todoStore.todoList[0].title).toEqual("aheh");
  });
});
