import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as firebaseConfig from '../firebase.config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'email': '',
      'password': ''
    };
    this._onEmailChange = this._onEmailChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._login = this._login.bind(this);
  }
  componentDidMount() {
    console.log({ 'fn': 'componentDidMount' });
  }
  componentWillReceiveProps(nextProps) {
    console.log({ 'fn': 'componentWillReceiveProps', 'params': nextProps });
  }
  _onEmailChange(event) {
    this.setState({ 'email': event.target.value });
  }
  _onPasswordChange(event) {
    this.setState({ 'password': event.target.value });
  }
  _login(event) {
    event.preventDefault();

    firebaseConfig.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.notifyLogin(true, this.state.email);
      })
      .catch((error) => {
        console.warn({ error });
        this.props.notifyLogin(false, '');
      });
  }
  render() {
    return (
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
      </form>
    );
  }
}

Login.propTypes = {
  "notifyLogin": PropTypes.func.isRequired
};

export default Login;