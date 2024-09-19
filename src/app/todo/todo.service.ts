import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addTodo, deleteTodo, getTodos, updateTodo } from './todo-api';
import { delay, of } from 'rxjs';
import { Todo } from '../../store/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private delay = 1000;
  constructor() {}

  getAllTodos() {
    return of(getTodos()).pipe(delay(this.delay));
  }

  addTodo(todo: Todo) {
    return of(addTodo(todo)).pipe(delay(this.delay));
  }

  deleteTodo(id: string) {
    return of(deleteTodo(id)).pipe(delay(this.delay));
  }

  updateTodo(id: string, updatedTodo: Todo) {
    return of(updateTodo(id, updatedTodo)).pipe(delay(this.delay));
  }
}
