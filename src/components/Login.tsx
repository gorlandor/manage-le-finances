import * as React from 'react';
import { Link } from 'react-router-dom';
import { IAuthManager } from '../models/Auth.interface';

const Login = ({ handleEmailChange, handlePasswordChange, handleLogin, loading }: IAuthManager) => {
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
          onChange={(event) => handleEmailChange(event)}
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
          onChange={(event) => handlePasswordChange(event)}
          required />
        <br />
      </label>

      {loading
        ? <button className="btn login-btn pointer" disabled>Login</button>
        : <button className="btn login-btn pointer">Login</button>
      }

      <hr />
      <Link className="actionLink" to="/register">Not an User? Register to continue.</Link>
    </form>
  );
}

export default Login;