// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import List from './List';
import Login from './Login';

class App extends Component {
  state: {
    email: string,
    signedIn: boolean
  };

  constructor(props: Object) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("authState")) || {
      'email': '',
      'signedIn': false
    };
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