import React, { PureComponent as Component } from 'react';
import Button from '../Button';
import './Footer.css';

export default class Footer extends Component {

	handleShuffle = () => this.props.shuffleAction();

	handleBack = () => this.props.backAction();

	render() {
		const { isDone, history } = this.props;

		return (
			<div className="Footer">
				<div className="Buttons">
					<Button disabled={!history.length} onClick={this.handleBack}>{'<'}</Button>
					<div className="Count">{!!history.length && history.length}</div>
					<Button onClick={this.handleShuffle}>Shuffle</Button>
				</div>
				{isDone && <div className="Done">Done</div>}
			</div>
		);
	}
}
