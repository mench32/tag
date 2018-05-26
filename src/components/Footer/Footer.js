import React, { Component } from 'react';
import Button from '../Button';
import './Footer.css';

export default class Footer extends Component {

	handleClick = () => this.props.shuffleAction();

	render() {
		return (
			<div className="Footer">
				<div className="Status">{this.props.isDone ? 'Done' : 'Fail'}</div>
				<Button onClick={this.handleClick}>Shuffle</Button>
			</div>
		);
	}
}
