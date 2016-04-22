import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers/index.js';
import { createInitialPositions } from './util.js';
import App from './components/App.js';

let initialState = {
  positions: createInitialPositions(4),
  moves: 0,
  timer: {
    active: false,
    enabled: false,
    time: 0
  }
};

const store = createStore(reducers, initialState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);

// store.subscribe(() => { console.log('render'); });
