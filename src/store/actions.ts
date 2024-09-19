import { createAction, props } from "@ngrx/store";

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[Todo] Load Todos Success',props<{todos: any}>());
export const loadTodosFailure = createAction('[Todo] Load Todos Failure',props<{error: any}>());

export const addTodo = createAction('[Todo] Add Todo',props<{todo: any}>());
export const addTodoSuccess = createAction('[Todo] Add Todo Success',props<{todo: any}>());
export const addTodoFailure = createAction('[Todo] Add Todo Failure',props<{error: any}>());

export const deleteTodo = createAction('[Todo] Delete Todo',props<{id: string}>());
export const deleteTodoSuccess = createAction('[Todo] Delete Todo Success');
export const deleteTodoFailure = createAction('[Todo] Delete Todo Failure',props<{error: any}>());
