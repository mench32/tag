import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
// import { startAction } from '../actions';
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
	moveAction: (step) => dispatch({
		type: events.MOVE,
		step
	})

});

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
