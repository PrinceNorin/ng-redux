import { InjectionToken } from '@angular/core';

import { Action } from './actions';
import { Reducer } from './reducers';

export interface StoreCallback {
  (): void;
}

export class Store<T> {
  private _state: T;
  private _callbacks: StoreCallback[] = [];

  constructor(private _reducer: Reducer<T>, initialState: T) {
    this._state = initialState;
  }

  getState(): T {
    return Object.assign({}, this._state) as T;
  }

  dispatch(action: Action): void {
    this._state = this._reducer(this._state, action);
    this._callbacks.forEach((c: StoreCallback) => c());
  }

  subscribe(callback: StoreCallback): StoreCallback {
    this._callbacks.push(callback);
    return () => {
      this._callbacks = this._callbacks.filter(c => c !== callback);
    }
  }
}

export const AppStore = new InjectionToken('App.Store');
