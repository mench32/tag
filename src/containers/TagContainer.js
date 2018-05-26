import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tag from '../components/Tag';

class TagContainer extends Component {
	render() {
		return (
			<Tag {...this.props} />
		);
	}
}


const mapStateToProps = ({ tag}) => ({
	tag
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	// getProducts
});

export default connect(mapStateToProps, mapDispatchToProps)(TagContainer);
