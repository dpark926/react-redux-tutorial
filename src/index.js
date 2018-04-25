import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';

// REDUCER
// how does a reducer read an action to update the store's state?
// it had 2 parameters: the initial state of the reducer, an action
// a reducer listens to every action that is sent
// need to figure what to do for each action
function reducer( state, action ) {
  // make sure the the reducer is receiving the action
  console.log( action );

  if ( action.type === 'changeState' ) {
    return action.payload.newState;
  }

  return 'State';
};

// STORE
// createStore must pass a reducer
const store = createStore( reducer );

// see the state of the store
// before action dispatched
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

// logging state after action dispatched
console.log( store.getState() );

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
