import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { StoreModule, provideStore } from '@ngrx/store';
import { appEffects, appStore } from '../../store/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: TodoComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TodoService],
  declarations: [TodoComponent],
})
export class TodoModule {}
