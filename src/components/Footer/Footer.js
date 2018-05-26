import React, { Component } from 'react';
import Button from '../Button';
import './Footer.css';

export default class Footer extends Component {

	handleClick = () => this.props.startAction();

	render() {
		return (
			<div className="Footer">
				<Button onClick={this.handleClick}>Shuffle</Button>
			</div>
		);
	}
}
