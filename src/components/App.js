import React, { Component } from 'react';
import List from './List';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'signedIn': false,
      'email': ''
    };

    this._notifyLogin = this._notifyLogin.bind(this);
  }
  componentDidMount() {
    console.info('App state @componentDidMount: ', this.state);
  }
  componentDidUpdate(prevProps, prevState) {
    console.info('App state @componentDidUpdate: ', this.state);
  }
  _notifyLogin(signedIn, email) {
    this.setState({
      'signedIn': signedIn,
      'email': email
    });    
  }
  render() {
    if (this.state.signedIn) {
      return <List />;
    }
    else {
      return <Login notifyLogin={this._notifyLogin} />;
    }
  }
}

export default App;