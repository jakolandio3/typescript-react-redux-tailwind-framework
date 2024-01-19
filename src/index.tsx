import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

interface AppProps {
	color?: string;
	//optional property
	milkos?: string;
}
interface InitialState {
	counter: number;
}
//either we set a state in the contructor using an initial state interface or we do it in a class as a property
class TestApp extends React.Component<AppProps, InitialState> {
	constructor(props: AppProps) {
		super(props);
		this.state = { counter: 0 };
	}
	inc = (): void => {
		this.setState({ counter: this.state.counter + 1 });
	};
	dec = (): void => {
		this.setState({ counter: this.state.counter - 1 });
	};
	render(): React.ReactNode {
		return (
			<div className=''>
				<button onClick={this.inc}>Incriment</button>
				{this.state.counter}
				<button onClick={this.dec}>Decriment</button>
			</div>
		);
	}
}
//we can define props in super or as a type parameter as a generic
// class TestApp extends React.Component {
// 	constructor(public props: any) {
// 		super(props);
// 	}
// 	render(): React.ReactNode {
// 		return (
// 			<div className=' text-red-500 bg-blue-400'>
// 				{this.props.color}Hello there young man
// 			</div>
// 		);
// 	}
// }
root.render(
	<React.StrictMode>
		<App color='red'>
			<TestApp />
			<TestApp />
		</App>
		<TestApp color='red' />
	</React.StrictMode>
);
