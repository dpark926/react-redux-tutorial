import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';

function reducer() {
  return 'State';
};

// STORE
// createStore must pass a reducer
const store = createStore( reducer );

// see the state of the store
console.log( store.getState() );

// ACTION
// object with a type and payload
const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
};

// DISPATCH
// send action to store
store.dispatch( action );

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
