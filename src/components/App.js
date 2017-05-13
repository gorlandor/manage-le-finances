import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import List from './List';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("authState")) || {
      'email': '',
      'signedIn': false
    };
  }
  componentDidMount() {
    console.info('App state @componentDidMount: ', this.state);
  }
  componentDidUpdate(prevProps, prevState) {
    console.info('App state @componentDidUpdate: ', this.state);
  }
  render() {
    return this.state.signedIn ? (
      <List />
    ) : (
        <Redirect to="/login" />
      );
  }
}

export default App;