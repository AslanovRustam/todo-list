import { createSelector } from "@reduxjs/toolkit";
import { filterVariants } from "../helpers/helpers";

export const selectAllTodos = (state) => state.todos.items;
export const selectFilter = (state) => state.filter;

export const selectedComplitedTodos = createSelector(
  [selectAllTodos],
  (todos) => {
    return todos.filter((todo) => todo.completed).length;
  }
);

export const selectFilteredTodos = createSelector(
  [selectAllTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case filterVariants.all:
        return todos;
      case filterVariants.completed:
        return todos.filter((todo) => todo.completed === true);
      case filterVariants.incompleted:
        return todos.filter((todo) => todo.completed === false);
      default:
        return todos;
    }
  }
);
