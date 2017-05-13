import React, { Component } from 'react';
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
    if (this.state.signedIn) {
      return <List />;
    }
    else {
      return <Login />;
    }
  }
}

export default App;