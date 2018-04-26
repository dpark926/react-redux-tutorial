import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// connect components to the store
import { connect } from 'react-redux';

class App extends Component {
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

        <div onClick={ this.onUpdateUser }>Update</div>
      </div>
    );
  }
}

// getting specific data from the state
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

// getting the whole state
// const mapStateToProps = state => {
//   return state;
// };

// connect takes 3 argumens
// mapStateToProps receives the state of the store
export default connect(mapStateToProps)(App);
