import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
const state = {
	table: {
		table: JSON.parse(window.localStorage.getItem('table')) || [],
		history: JSON.parse(window.localStorage.getItem('history')) || [],
	}
}
const store = createStore(rootReducer, state);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
