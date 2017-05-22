// @flow
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as firebaseConfig from '../firebase.config';

class Login extends Component {
  state: {
    email: string,
    password: string,
    signedIn: boolean
  };

  _onEmailChange: Function;
  _onPasswordChange: Function;
  _login: Function;

  constructor(props: Object) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("authState")) || {
      'email': '',
      'password': '',
      'signedIn': false
    };
    this._onEmailChange = this._onEmailChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._login = this._login.bind(this);
  }
  _onEmailChange(event: SyntheticInputEvent) {
    this.setState({ 'email': event.target.value });
  }
  _onPasswordChange(event: SyntheticInputEvent) {
    this.setState({ 'password': event.target.value });
  }
  _login(event: Event) {
    event.preventDefault();

    firebaseConfig.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        let uid = firebaseConfig.auth().currentUser.uid;
        localStorage.setItem('authState', JSON.stringify({
          'email': this.state.email,
          'signedIn': true,
          uid
        }));
        this.setState({
          'signedIn': true
        });
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error.message);
        console.warn({ error });
      });
  }
  render() {
    return this.state.signedIn ? (
      <Redirect to={{
        'pathname': '/',
        'state': { 'email': this.state.email, 'signedIn': this.state.signedIn }
      }} />
    ) : (
        <form className="login-form flex-vertically" autoComplete="off" onSubmit={this._login}>
          <label className="form-label flex-vertically">
            Email
          <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={this._onEmailChange} />
            <br />
          </label>
          <label className="form-label flex-vertically">
            Password
          <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={this._onPasswordChange} />
            <br />
          </label>
          <button className="btn login-btn">Login</button>
          <hr />
          <Link className="actionLink" to="/register">Not an User? Register to continue.</Link>
        </form>
      );
  }
}

export default Login;