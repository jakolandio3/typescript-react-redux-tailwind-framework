import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[]; // Update the type of the todos property
	fetchTodos: Function; //redux cant take the type of fetch here so we just have to say it will be a function
	deleteTodo: typeof deleteTodo;
}

interface AppState {
	fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = { fetching: false };
	}
	componentDidUpdate(prevProps: AppProps): void {
		if (!prevProps.todos.length && this.props.todos.length) {
			this.setState({ fetching: false });
		}
	}
	onButtonClick = (): void => {
		this.props.fetchTodos();
		this.setState({ fetching: true });
	};
	onTodoClick = (id: number): void => {
		this.props.deleteTodo(id);
	};

	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => {
			return (
				<div
					onClick={() => this.onTodoClick(todo.id)}
					key={todo.id}
					className=''
				>
					{todo.title}
				</div>
			);
		});
	}

	render(): React.ReactNode {
		return (
			<div className=''>
				<button onClick={this.onButtonClick}>fetch</button>
				{this.state.fetching ? 'LOADING DATA' : ''}
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
//theres an error for type of fetch todos

//________test code for learning__________________________\\

// import React from 'react';
// import { ReactNode, useState } from 'react';
// import './App.css';

// interface AppProps {
// 	color: string;
// 	children?: ReactNode;
// }

// function App({ color, children = 'hello' }: AppProps): React.JSX.Element {
// 	const [counter, setCounter] = useState(0);
// 	function IncNum(): void {
// 		setCounter(counter + 1);
// 	}
// 	function DecNum(): void {
// 		setCounter((counter) => counter - 1);
// 	}
// 	return (
// 		<div className='App bg-red-400'>
// 			<button onClick={IncNum}>+1</button>
// 			<p> {counter} </p>
// 			{children}
// 			{color}
// 			<button onClick={DecNum}>-1</button>
// 		</div>
// 	);
// }

// export default App;
