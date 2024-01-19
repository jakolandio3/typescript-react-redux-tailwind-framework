import React from 'react';
import { ReactNode, useState } from 'react';
import './App.css';

interface AppProps {
	color: string;
	children?: ReactNode;
}

function App({ color, children = 'hello' }: AppProps): React.JSX.Element {
	const [counter, setCounter] = useState(0);
	function IncNum(): void {
		setCounter(counter + 1);
	}
	function DecNum(): void {
		setCounter((counter) => counter - 1);
	}
	return (
		<div className='App bg-red-400'>
			<button onClick={IncNum}>+1</button>
			<p> {counter} </p>
			{children}
			{color}
			<button onClick={DecNum}>-1</button>
		</div>
	);
}

export default App;
