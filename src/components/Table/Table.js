import React, { PureComponent as Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Table.css';

export default class Table extends Component {
	state = {
		step: 0
	}

	handleClick(cell, index) {
		const { table, moveAction } = this.props;
		const zero = table.indexOf(0);
		const position = index - zero

		if (Math.abs(position) === 1 || Math.abs(position) === 4) {
			moveAction(position);
		}
	}

	componentWillReceiveProps(nextProps) {
		let step;
		if (nextProps.history.length < this.props.history.length) {
			step = this.props.history[this.props.history.length - 1] * -1;
		} else {
			step = nextProps.history[nextProps.history.length - 1];
		}
		this.setState({
			step
		});
	}

	render() {
		const { table } = this.props;
		const { step } = this.state;

		return (
			<TransitionGroup className="Table">
				{table.map((cell, i) => {
					return (
						<CSSTransition
							key={cell + ' - ' + i}
							classNames={'move' + (step ? step : '')}
							timeout={{
								enter: 200,
								appear: 0,
								exit: 0
							}}
							enter={!!step}
							exit
							appear={false}
							unmountOnExit
						>
							<div
								className="Cell"
								onClick={() => this.handleClick(cell, i)}
							>
								<div className="CellContent">{!!cell && cell}</div>
							</div>
						</CSSTransition>
					)
				})}
			</TransitionGroup>

		);
	}
}
