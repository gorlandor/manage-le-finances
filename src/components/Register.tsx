import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
const firebaseConfig = require('../firebase.config');
import { IAuth } from '../models/Auth.interface';

class Register extends React.Component {

  state: IAuth;

  constructor(props: Object) {
    super(props);
    this.state = {
      'email': '',
      'password': '',
      'registered': false
    };
  }
  _onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ 'email': event.target.value });
  }
  _onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ 'password': event.target.value });
  }
  _register = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    firebaseConfig.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        // Handle Success here.        
        let uid = firebaseConfig.auth().currentUser.uid;
        localStorage.setItem('authState', JSON.stringify({
          'email': this.state.email,
          'signedIn': true,
          uid
        }));
        this.setState({
          'registered': true
        });
      })
      .catch((error: Error) => {
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