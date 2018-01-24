import { Component, Inject } from '@angular/core';

import { AppState } from './state';
import { TodoAction } from '../actions';
import { Store, AppStore } from '../store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  todos: string[] = [];

  constructor(@Inject(AppStore) private _store: Store<AppState>) {
    _store.subscribe(() => {
      const state: AppState = this._store.getState() as AppState;
      this.todos = state.todos;
    });
  }

  addTodo(todo: string): void {
    this._store.dispatch(TodoAction.addTodo(todo));
  }

  deleteTodo(index: number): void {
    console.log(index);
    this._store.dispatch(TodoAction.deleteTodo(index));
  }
}
