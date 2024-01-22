import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (
	state: Todo[] = [],
	action: Action
): typeof state => {
	if (state) {
		switch (action.type) {
			case ActionTypes.fetchTodos:
				return action.payload;
			case ActionTypes.deleteTodo:
				return state.filter((todo: Todo) => todo.id !== action.payload);
			//basic filter method for returning only those that dont match the id passed in the method
			default:
				return state;
		}
	} else return [];
};
