import events from '../constants/events';

const moveZero = (arr, step) => {
	const result = [ ...arr ];
	const zero = result.indexOf(0);

	result[zero] = arr[zero + step];
	result[zero + step] = 0;

	return result;
}
export default (state = [], action) => {
	switch (action.type) {
		case events.START: {
			const newState = Array.from({ length: 15 }, (v, k) => ++k);
			newState.sort(() => Math.random() - 0.5);
			newState.push(0);

			return newState;
		}
		case events.MOVE: {
			return moveZero(state, action.step);
		}
		default: {
			return state;
		}
	}


};
