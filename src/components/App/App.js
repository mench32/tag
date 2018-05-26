import React, { Component } from 'react';
import Table from '../Table';
import Footer from '../Footer';
import './App.css';

export default class App extends Component {

	componentWillMount() {
		this.props.startAction();
	}

	render() {
		const { table, startAction, moveAction } = this.props;

		return (
			<div className="App">
				<Table {...{ table, startAction, moveAction }} />
				<Footer {...{ startAction }} />
			</div>
		);
	}
}
