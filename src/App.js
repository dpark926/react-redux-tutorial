import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// connect components to the store
import { connect } from 'react-redux';

import { updateUser } from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  // onUpdateUser() {
  //   this.props.onUpdateUser('Sammy');
  // }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* <div onClick={ this.onUpdateUser }>Update To Sammy</div> */}
        <input onChange={ this.onUpdateUser } />
        { this.props.user }
      </div>
    );
  }
}

// mapStateToProps
// getting specific data from the state
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

// getting the whole state
// const mapStateToProps = state => {
//   return state;
// };

// mapActionsToProps
const mapActionsToProps = {
  onUpdateUser: updateUser
}

// connect takes 3 argumens
// mapStateToProps receives the state of the store
// mapActionsToProps (mapDispatchToProps) allows us to dispatch actions from components
export default connect(mapStateToProps, mapActionsToProps)(App);
