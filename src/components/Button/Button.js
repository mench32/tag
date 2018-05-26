import React, { PureComponent as Component } from 'react';
import './Button.css';

export default class Footer extends Component {
	render() {
		const { children, className, ...props } = this.props;

		return (
			<button
				className="Button"
				{...props}
			>
				{children}
			</button>
		);
	}
}
