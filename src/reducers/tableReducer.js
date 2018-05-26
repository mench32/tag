import events from '../constants/events';

const moveZero = (arr, step) => {
	const result = [ ...arr ];
	const zero = result.indexOf(0);

	result[zero] = arr[zero + step];
	result[zero + step] = 0;

	return result;
}

const checkStatus = (table) => {
	const arr = table.slice(0, -1);
	return arr.every((item, i) => {
		console.log(arr, item, i + 1)
		return item === i + 1;
	});
};

export default (state = { table: [], isDone: false }, action) => {
	switch (action.type) {
		case events.START: {
			const table = Array.from({ length: 15 }, (v, k) => ++k);

			table.sort((a, b) => a - b);
			// 	table.sort(() => Math.random() - 0.5);
			table.push(0);
			return {
				table,
				isDone: checkStatus(table)
			}
		}

		case events.MOVE: {
			const table = moveZero(state.table, action.step);
			return {
				table,
				isDone: checkStatus(table)
			}
		}

		default: {
			return state;
		}
	}


};
