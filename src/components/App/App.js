import React, { PureComponent as Component } from 'react';
import Table from '../Table';
import Footer from '../Footer';
import './App.css';

export default class App extends Component {

	componentWillMount() {
		this.props.startAction();
	}

	render() {
		const { table, shuffleAction, moveAction, backAction } = this.props;

		return (
			<div className="App">
				<Table
					{...{
						table: table.table,
						shuffleAction,
						moveAction
					}}
				/>
				<Footer {...{ shuffleAction, backAction, isDone: table.isDone, history: table.history }} />
			</div>
		);
	}
}
