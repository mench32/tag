import React, { Component } from 'react';
// import './App.css';

export default class Tag extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="Tag">
				{this.props.tag}
			</div>
		);
  }
}
