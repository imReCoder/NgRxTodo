import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoModule } from './todo/todo.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appEffects, appStore } from '../store/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NgRxTodo';
}
