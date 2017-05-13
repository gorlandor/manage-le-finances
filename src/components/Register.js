import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as firebaseConfig from '../firebase.config';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'email': '',
      'password': '',
      'registered': false
    };
    this._onEmailChange = this._onEmailChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._register = this._register.bind(this);
  }
  componentDidMount() {
    console.info('Register state @componentDidMount: ', this.state);
  }
  componentWillReceiveProps(nextProps) {
    console.info({ 'Register state @componentWillReceiveProps': this.state, 'params': nextProps });
  }
  _onEmailChange(event) {
    this.setState({ 'email': event.target.value });
  }
  _onPasswordChange(event) {
    this.setState({ 'password': event.target.value });
  }
  _register() {
    event.preventDefault();

    firebaseConfig.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        // Handle Success here.
        localStorage.setItem('authState', JSON.stringify({
          'email': this.state.email,
          'signedIn': true
        }));
        this.setState({
          'registered': true
        });        
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error.message);
        console.warn({ error });
      });
  }
  render() {
    return this.state.registered ? (
      <Redirect to="/login" />
    ) : (
        <form className="login-form flex-vertically" autoComplete="off" onSubmit={this._register}>
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
          <button className="btn login-btn">Register</button>
          <hr />
          <Link className="actionLink" to="/login">Already an User? Login to continue.</Link>
        </form>
      );
  }
}

export default Register;