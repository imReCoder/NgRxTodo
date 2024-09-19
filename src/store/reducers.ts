import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './actions';

export interface TodoState {
  todos: any[];
  loading: boolean;
  error: any;
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state:TodoState) => ({ ...state, loading: true })),
  on(TodoActions.loadTodosSuccess, (state:TodoState, { todos }) => ({ ...state, todos, loading: false })),
  on(TodoActions.loadTodosFailure, (state:TodoState, { error }) => ({ ...state, error, loading: false })),

  on(TodoActions.addTodo, (state:TodoState) => ({ ...state, loading: true })),
  on(TodoActions.addTodoSuccess, (state:TodoState, { todo }) => ({ ...state, todos: [...state.todos, todo], loading: false })),
  on(TodoActions.addTodoFailure, (state:TodoState, { error }) => ({ ...state, error, loading: false })),

  on(TodoActions.deleteTodo, (state:TodoState) => ({ ...state, loading: true })),
  on(TodoActions.deleteTodoSuccess, (state:TodoState) => ({ ...state, loading: false })),
  on(TodoActions.deleteTodoFailure, (state:TodoState, { error }) => ({ ...state, error, loading: false }))



);
