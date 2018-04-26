import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// combineReducers allows multiple reducers to be combined into a single reducer
// to be passed into the store
import { combineReducers, createStore } from 'redux';

// REDUCERS
function productsReducer( state = [], action ) {
  return state;
};

function userReducer( state = '', action ) {
  switch ( action.type ) {
    case 'updateUser':
      return action.payload;
  }

  return state;
};

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

// STORE
// pass initial state (prepopulated) as second argument
// setting up redux devtool as third argument
const store = createStore(
  allReducers,
  {
    products: [{name: 'iPhone' }],
    user: 'Michael'
  },
  window.devToolsExtension && window.devToolsExtension()
);

console.log( store.getState() );

// ACTIONS
const updateUserAction = {
  type: 'updateUser',
  payload: {
    user: 'John'
  }
}

store.dispatch( updateUserAction );

// // REDUCER
// // how does a reducer read an action to update the store's state?
// // it had 2 parameters: the initial state of the reducer, an action
// // a reducer listens to every action that is sent
// // need to figure what to do for each action
// function reducer( state, action ) {
//   // make sure the the reducer is receiving the action
//   console.log( action );
//
//   if ( action.type === 'changeState' ) {
//     return action.payload.newState;
//   }
//
//   return 'State';
// };
//
// // STORE
// // createStore must pass a reducer
// const store = createStore( reducer );
//
// // see the state of the store
// // before action dispatched
// console.log( store.getState() );
//
// // ACTION
// // object with a type and payload
// const action = {
//   type: 'changeState',
//   payload: {
//     newState: 'New State'
//   }
// };
//
// // DISPATCH
// // send action to store
// store.dispatch( action );
//
// // logging state after action dispatched
// console.log( store.getState() );

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
