import * as React from 'react';
import { Redirect } from 'react-router-dom';
import List from './List';
import Login from './Login';
import { IAuth } from '../models/Auth.interface';

class App extends React.Component {

  state: IAuth;

  constructor(props: Object) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("authState")!) || {
      'email': '',
      'signedIn': false
    };
  }

  /**
   * render
   */
  public render() {
    return this.state.signedIn ? (
      <List />
    ) : (
        <Redirect to="/login" />
      );
  }

}
export default App;