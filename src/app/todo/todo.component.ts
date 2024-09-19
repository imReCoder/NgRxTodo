import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../store/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store';
import { selectAllTodos } from '../../store/selectors';
import * as TodoActions from '../../store/actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]>;
  isLoading$: Observable<boolean>;

  constructor(private store:Store<AppState>) {
    this.todos$ = this.store.select((state)=>state.todo.todos);
    this.isLoading$ = this.store.select((state)=>state.todo.loading);
    this.loadAllTodos();

    this.todos$.subscribe((todos)=>{
      console.log('Received todos ',todos);
    })
  }

  ngOnInit() {}

  loadAllTodos(){
    this.store.dispatch(TodoActions.loadTodos());
  }

  complete(todo: Todo){

  }
}
