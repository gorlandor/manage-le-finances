import * as React from 'react';
import { Link } from 'react-router-dom';
import { IAuthManager } from '../models/Auth.interface';
import { ApplicationStates, initialState } from '../models/AppStatus.interface';

class Login extends React.Component<IAuthManager> {
  
  componentDidMount() {
    const {
      setStatus
    } = this.props;

    setStatus(initialState);
  }

  render() {
    const { handleInputChange, handleLogin, status } = this.props;

    return (
      <form
        className="login-form flex-vertically"
        onSubmit={(event) => handleLogin(event)}>
        <label className="form-label flex-vertically">
          Email
        <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            onChange={(event) => handleInputChange(event)}
            required />
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
            autoComplete="current-password"
            onChange={(event) => handleInputChange(event)}
            required />
          <br />
        </label>
  
        {status === ApplicationStates.LOGIN_STARTED
          ? <button type="submit" className="btn login-btn pointer" disabled>Signing in...</button>
          : <button type="submit" className="btn login-btn pointer">Sign in</button>
        }
  
        <hr />
        <Link className="actionLink" to="/register">Not an User? Register to continue.</Link>
      </form>
    );
  }
}

export default Login;