import React, { Component } from 'react';
import './Table.css';

export default class Table extends Component {

	handleClick(cell, index) {
		const { table, moveAction } = this.props;
		const zero = table.indexOf(0);
		const position = index - zero

		if (Math.abs(position) === 1 || Math.abs(position) === 4) {
			moveAction(position);
		}
	}

	render() {
		const { table } = this.props;

		return (
			<div className="Table">
				{table.map((cell, i) => (
					<div
						key={cell}
						className="Cell"
						onClick={() => this.handleClick(cell, i)}
					>
						<div className="CellContent">{!!cell && cell}</div>
					</div>
				))}
			</div>

		);
	}
}
