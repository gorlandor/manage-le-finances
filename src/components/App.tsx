import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { IAuth } from '../models/Auth.interface';
import { IExpense } from '../models/Expense.interface';
import * as firebaseConfig from '../firebase.config';
import Login from './Login';
import Register from './Register';
import PrivateRoute from './PrivateRoute';
import List from './List';
import ExpenseForm from './ExpenseForm';
import Logout from './Logout';

class App extends React.Component {

  state: IAuth;
  storedState: IAuth = JSON.parse(window.localStorage.getItem("authState")!);
  loading: boolean = false;

  constructor(props: Object) {
    super(props);
    this.state = this.storedState || {
      email: "",
      password: "",
      signedIn: false
    };
  }

  /**
   * _login
   */
  private _login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.loading = true;

    firebaseConfig.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {

        // Handle Success here.
        this.setState({
          signedIn: true,
          uid: firebaseConfig.auth().currentUser.uid
        });

      })
      .catch((error: Error) => {
        // Handle Errors here.
        alert(error.message);
        console.warn({ error });
      })
      .then(() => {
        this.loading = false;
      });
  }

  /**
   * _register
   */
  private _register = (event: Event) => {
    event.preventDefault();

    firebaseConfig.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {

        // Handle Success here.                
        this.setState({
          registered: true,
          uid: firebaseConfig.auth().currentUser.uid
        });

      })
      .catch((error: Error) => {
        // Handle Errors here.
        alert(error.message);
        console.warn({ error });
      })
      .then(() => console.log(this.state));
  }

  /**
   * _onEmailChange
   */
  private _onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ 'email': event.target.value });
  }

  /**
   * _onPasswordChange
   */
  private _onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ 'password': event.target.value });
  }

  /**
   * _logout
   */
  private _logout = () => {

    firebaseConfig.auth().signOut();
    this.setState({ signedIn: false, uid: null });

  }

  /**
   * componentDidUpdate
   */
  public componentWillUpdate(nextProps: any, nextState: IAuth) {
    localStorage.setItem("authState", JSON.stringify(nextState));
  }

  /**
   * render
   */
  public render() {

    let loginEventHandlers = {
      handleEmailChange: this._onEmailChange,
      handlePasswordChange: this._onPasswordChange,
      handleLogin: this._login
    };

    let registrationEventHandlers = {
      handleEmailChange: this._onEmailChange,
      handlePasswordChange: this._onPasswordChange,
      handleRegister: this._register
    };

    return (
      <Router>
        <div className="full-width">

          <Route exact path="/" render={() => (
            this.state.signedIn
              ? <Redirect to="/expense-list" />
              : <Redirect to="/login" />
          )} />

          <Route path="/login" render={() => (
            this.state.signedIn
              ? <Redirect to="/expense-list" />
              : <Login {...loginEventHandlers} loading={this.loading} />
          )} />

          <Route path="/register" render={() => (
            <Register {...registrationEventHandlers} />
          )} />

          <Route path="/expense-list" render={() => <List uid={this.state.uid} />} />
          <Route path="/expense-form" render={() => <ExpenseForm uid={this.state.uid}/>} />
          
          
          <Route path="/logout" render={() => {
            this._logout();
            return (
              <Redirect to="/login" />
            );
          }} />

        </div>
      </Router>
    );
  }

}

export default App;