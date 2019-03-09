import * as React from 'react';
import { Link } from 'react-router-dom';
import { IAuthManager } from '../models/Auth.interface';

const Register = ({ handleEmailChange, handlePasswordChange, handleRegister, loading }: IAuthManager) => {
  return (
    <form
      className="register-form flex-vertically"
      onSubmit={(event) => handleRegister(event)}>
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
          required/>
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
          required/>
        <br />
      </label>

      {loading
        ? <button type="submit" className="btn register-btn not-allowed" disabled>Registering...</button>
        : <button type="submit" className="btn register-btn pointer">Register</button>
      }

      <hr />
      <Link className="actionLink" to="/login">Already an User? Login to continue.</Link>
    </form>
  );
}

export default Register;