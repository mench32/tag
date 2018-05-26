import React, { Component } from 'react';
import Button from '../Button';
import './Footer.css';

export default class Footer extends Component {

	handleShuffle = () => this.props.shuffleAction();

	handleBack = () => this.props.backAction();

	render() {
		const { isDone, history } = this.props;
		return (
			<div className="Footer">
				<div className="Status">{isDone ? 'Done' : 'Fail'}</div>
				<div className="Buttons">
					<div className="Count">{!!history.length && history.length}</div>
					<Button disabled={!history.length} onClick={this.handleBack}>{'<'}</Button>
					<Button onClick={this.handleShuffle}>Shuffle</Button>
				</div>
			</div>
		);
	}
}
