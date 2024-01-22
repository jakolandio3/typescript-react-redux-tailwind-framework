import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
//creating an Enum for the types of dispatches

//define an interface for the response data
export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface FetchTodosAction {
	type: ActionTypes.fetchTodos;
	payload: Todo[];
}
export interface DeleteTodoAction {
	type: ActionTypes.deleteTodo;
	payload: number;
	//provide the ID of the todo to delete
}

const DATABASE = 'https://jsonplaceholder.typicode.com/todos';
export const fetchTodos = () => {
	//had to use dispatch any here to satisfy the action type constaint as it kept being forced to string on the Dispatch type file i made sure dispatch itself was the type of Fetch todos so that there was still error handling
	return async (dispatch: Dispatch<any>) => {
		const res = await axios.get<Todo[]>(DATABASE);

		dispatch<FetchTodosAction>({
			type: ActionTypes.fetchTodos,
			payload: res.data,
		});
	};
};

export const deleteTodo = (id: number): DeleteTodoAction => {
	return {
		type: ActionTypes.deleteTodo,
		payload: id,
	};
};
