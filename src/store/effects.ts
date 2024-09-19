import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTodos, loadTodosSuccess, loadTodosFailure } from './actions';
import { Injectable } from "@angular/core";
import { TodoService } from '../app/todo/todo.service';
import { catchError, map, of, switchMap } from 'rxjs';


@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService){}

  loadTodos = createEffect(()=>{
    return this.actions$.pipe(
      ofType(loadTodos),
      switchMap(()=>{
        return this.todoService.getAllTodos().pipe(
          map((todos)=>{
            return loadTodosSuccess({todos})
          }),
          catchError((error)=>{
            return of(loadTodosFailure({error}))
          })
        )
      })
    )
  })

}
