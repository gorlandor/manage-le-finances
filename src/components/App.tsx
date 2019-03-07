import * as React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import * as firebaseConfig from "../firebase.config";
import { IAuth } from "../models/Auth.interface";
import ExpenseForm from "./ExpenseForm";
import List from "./List";
import Login from "./Login";
import Register from "./Register";

class App extends React.Component {
  state: IAuth;
  storedState: IAuth = JSON.parse(window.localStorage.getItem("authState")!);

  constructor(props: Object) {
    super(props);
    this.state = this.storedState || {
      email: "",
      password: "",
      signedIn: false,
      loading: false
    };
  }

  /**
   * _login
   */
  private _login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState({
      loading: true
    });

    firebaseConfig
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
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
        this.setState({
          loading: false
        })
      });
  };

  /**
   * _register
   */
  private _register = (event: Event) => {
    event.preventDefault();

    firebaseConfig
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
  };

  /**
   * _onEmailChange
   */
  private _onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  /**
   * _onPasswordChange
   */
  private _onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  /**
   * _logout
   */
  private _logout = () => {
    firebaseConfig.auth().signOut();
    this.setState({ signedIn: false, uid: null });
  };

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

    const {
      loading = false,
      signedIn = false,
      uid = null
    } = this.state;

    return (
      <Router>
        <div className="full-width">
          <Route
            exact
            path="/"
            render={() =>
              signedIn ? (
                <Redirect to="/expense-list" />
              ) : (
                  <Redirect to="/login" />
                )
            }
          />

          <Route
            path="/login"
            render={() =>
              signedIn ? (
                <Redirect to="/expense-list" />
              ) : (
                  <Login {...loginEventHandlers} loading={loading} />
                )
            }
          />

          <Route
            path="/register"
            render={() => <Register {...registrationEventHandlers} />}
          />

          <Route
            path="/expense-list"
            render={() => (
              signedIn
                ? <List uid={uid} />
                : <Redirect to="/login" />
            )}
          />

          <Route
            path="/expense-form/:expenseId"
            render={({ match: { params } }) => (
              signedIn
                ? <ExpenseForm uid={uid} expenseId={params.expenseId} />
                : <Redirect to="/login" />
            )}
          />

          <Route
            path="/logout"
            render={() => {
              this._logout();
              return <Redirect to="/login" />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
