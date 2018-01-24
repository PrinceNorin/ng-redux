import Action from './interface';

export default class TodoAction {
  static addTodo(todo: string): Action {
    return {
      type: 'ADD_TODO',
      payload: todo
    } as Action;
  }

  static deleteTodo(index: number): Action {
    return {
      type: 'DELETE_TODO',
      payload: index,
    } as Action;
  }
}
