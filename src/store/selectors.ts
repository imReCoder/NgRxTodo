import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from './todo.model';

export const selectTodos = createFeatureSelector<Todo[]>('todos');

export const selectAllTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos
);
