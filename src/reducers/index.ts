import { Action } from '../actions';
import { AppState } from '../app/state';


export interface Reducer<T> {
  (state: T, action: Action): T;
}

export const AppReducer: Reducer<AppState> = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: state.todos.concat(action.payload)
      };

    case 'DELETE_TODO':
      let newState = [...state.todos];
      newState.splice(action.payload, 1);

      return {
        todos: newState
      };

    default:
      return state;
  }
}
