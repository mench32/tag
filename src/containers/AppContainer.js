import React, { PureComponent as Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import events from '../constants/events';

class TableContainer extends Component {
	render() {
		return (
			<App {...this.props} />
		);
	}
}

const mapStateToProps = ({ table }) => ({
	table
});

const mapDispatchToProps = (dispatch) => ({
	startAction: () => dispatch({
		type: events.START
	}),
	shuffleAction: () => dispatch({
		type: events.SHUFFLE
	}),
	moveAction: (step) => dispatch({
		type: events.MOVE,
		step
	}),
	backAction: (step) => dispatch({
		type: events.BACK,
		step
	})

});

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
