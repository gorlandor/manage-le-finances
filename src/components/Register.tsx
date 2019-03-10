import * as React from 'react';
import { Link } from 'react-router-dom';
import { IAuthManager } from '../models/Auth.interface';
import { ApplicationStates, initialState } from '../models/AppStatus.interface';

class Register extends React.Component<IAuthManager> {
  
  componentDidMount() {
    const {
      setStatus
    } = this.props;

    setStatus(initialState);
  }

  render() {
    const { handleInputChange, handleRegister, status } = this.props;
    
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
            onChange={(event) => handleInputChange(event)} 
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
            onChange={(event) => handleInputChange(event)} 
            required/>
          <br />
        </label>
  
        {status === ApplicationStates.REGISTRATION_STARTED
          ? <button type="submit" className="btn register-btn not-allowed" disabled>Registering...</button>
          : <button type="submit" className="btn register-btn pointer">Register</button>
        }
  
        <hr />
        <Link className="actionLink" to="/login">Already an User? Login to continue.</Link>
      </form>
    );
  }
}

export default Register;