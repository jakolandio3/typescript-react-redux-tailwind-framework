import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions'; // Import the Todo type
export interface StoreState {
	todos: Todo[]; // Define the type of the todos property as Todo[]
}

export const reducers = combineReducers<StoreState>({
	todos: todosReducer as any, // Cast todosReducer to any to bypass the type error
});
