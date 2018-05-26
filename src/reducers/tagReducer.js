import events from '../constants/events';

export default (state = 'good!!', action) => {
	switch (action.type) {
		case events.START: {
			return state;
		}
		default: {
			return state;
		}
	}


};
