import React, { Component } from 'react';
import Table from '../Table';
import Footer from '../Footer';
import './App.css';

export default class App extends Component {

	componentWillMount() {
		if (!this.props.table.table || !this.props.table.table.length) {
			this.props.shuffleAction();
		}
	}

	render() {
		const { table, shuffleAction, moveAction } = this.props;

		return (
			<div className="App">
				<Table
					{...{
						table: table.table,
						shuffleAction,
						moveAction
					}}
				/>
				<Footer {...{ shuffleAction, isDone: table.isDone, }} />
			</div>
		);
	}
}
