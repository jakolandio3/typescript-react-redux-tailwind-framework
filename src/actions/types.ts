import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
	fetchTodos = '0', //Ts will assign this as a 0 by default i had to override this to a string as the type file has changed and must be a string
	deleteTodo = '1',
}

export type Action = FetchTodosAction | DeleteTodoAction;
