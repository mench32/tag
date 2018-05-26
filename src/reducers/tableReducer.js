import events from '../constants/events';

const moveZero = (arr, step) => {
	const result = [ ...arr ];
	const zero = result.indexOf(0);

	result[zero] = arr[zero + step];
	result[zero + step] = 0;

	window.localStorage.setItem('table', JSON.stringify(result));

	return result;
}

const checkStatus = (table) => {
	const arr = table.slice(0, -1);

	return arr.every((item, i) => item === i + 1);
};

const createNewTable = () => {
	const table = Array.from({ length: 15 }, (v, k) => ++k);

	table.sort(() => Math.random() - 0.5);
	table.push(0);
	window.localStorage.removeItem('table');

	return table;
}

export default (state = { table: [], isDone: false, history: [] }, action) => {
	switch (action.type) {
		case events.SHUFFLE: {
			const table = createNewTable();

			window.localStorage.removeItem('history');

			return {
				table,
				isDone: checkStatus(table),
				history: [],
			}
		}

		case events.MOVE: {
			const table = moveZero(state.table, action.step);
			const history = state.history.concat(action.step);
			const isDone = checkStatus(table);

			window.localStorage.setItem('history', JSON.stringify(history));

			return { table, history, isDone };
		}

		case events.BACK: {
			if (state.history.length > 0) {
				const step = state.history[state.history.length-1] * -1;
				const table = moveZero(state.table, step);
				const history = state.history.slice(0, -1);
				const isDone = checkStatus(table);

				window.localStorage.setItem('history', JSON.stringify(history));

				return { table, history, isDone };
			} else {
				return state;
			}

		}
		default: {
			return state;
		}
	}


};
