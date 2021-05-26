import * as React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import * as firebaseConfig from "../firebase.config";
import { IAuth } from "../models/Auth.interface";
import { ApplicationStates, initialState, LogOutState, LogInCompleteState, LogInFailedState, LogInStartedState, RegistrationStartedState, RegistrationCompleteState, RegistrationFailedState } from "../models/AppStatus.interface";
import ExpenseForm from "./ExpenseForm";
import List from "./List";
import Login from "./Login";
import Register from "./Register";
import CategoryForm from "./CategoryForm";

class App extends React.Component {  

  state: IAuth;
  storedState: IAuth = JSON.parse(localStorage.getItem("authState"));
  constructor(props: Object) {
    super(props);
    this.state = this.storedState || initialState;
  }

  componentDidUpdate(prevProps:any, prevState:IAuth) {
    if (prevState.status !== this.state.status) {
      localStorage.setItem("authState", JSON.stringify(this.state));
    }
  }

  /**
   * _login
   */
  private _login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {email, password} = this.state;

    this.setState(LogInStartedState());

    try {
      firebaseConfig
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Handle Success here.
        const { uid } = firebaseConfig.auth().currentUser;
        this.setState(LogInCompleteState(uid));
      })
      .catch((error: Error) => {
        // Handle Errors here.
        alert(error.message);
        this.setState(LogInFailedState());
      });
    } catch (error) {
      // Handle Errors here.
      alert(error.message);
      this.setState(LogInFailedState())
    }
  };

  /**
   * _register
   */
  private _register = (event: Event) => {
    event.preventDefault();

    const {email, password} = this.state;

    this.setState(RegistrationStartedState());

    try {
      firebaseConfig
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Handle Success here.
        const { uid } = firebaseConfig.auth().currentUser;
        this.setState(RegistrationCompleteState(uid));
      })
      .catch((error: Error) => {
        // Handle Errors here.
        alert(error.message);
        this.setState(RegistrationFailedState())
      })
      .then(() => console.log(this.state));
    } catch (error) {
      // Handle Errors here.
      alert(error.message);
      this.setState(RegistrationFailedState())
    }

  };

  /**
   * _onInputChange
   */
  private _onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  };

  /**
   * _logout
   */
  private _logout = () => {
    firebaseConfig.auth().signOut();
    this.setState(LogOutState());
  };

  /**
   * render
   */
  public render() {
    let loginEventHandlers = {
      handleInputChange: this._onInputChange,      
      handleLogin: this._login,
      setStatus: (status: ApplicationStates) => {
        this.setState(status)
      }
    };

    let registrationEventHandlers = {
      handleInputChange: this._onInputChange,      
      handleRegister: this._register,
      setStatus: (status: ApplicationStates) => {
        this.setState(status)
      }
    };

    const {
      email,      
      status = ApplicationStates.INITIAL,
      uid = null
    } = this.state;

    return (
      <Router>
        <div className="full-width">
          <Route
            exact
            path="/"
            render={() =>{              
              return uid 
              ? <Redirect to="/expense-list" /> 
              : <Redirect to="/login" />
            }}
          />

          <Route
            path="/login"
            render={({ history, location }) => {              
              return uid 
                ? <Redirect to="/expense-list" /> 
                : <Login {...loginEventHandlers} status={status} {...{ history, location }}/>
            }}
          />

          <Route
            path="/register"
            render={() => {              
              return <Register {...registrationEventHandlers} status={status} {...{ history, location }}/>;
            }}
          />

          <Route
            path="/expense-list"
            render={() => {
              return uid
              ? <List uid={uid} />
              : <Redirect to="/login" />
            }}
          />

          <Route
            path="/expense-form/:step/:expenseId?"
            render={({ match: { params } }) => {
              return uid
              ? <ExpenseForm email={email} uid={uid} step={Number(params.step)} expenseId={params.expenseId} />
              : <Redirect to="/login" />
            }}
          />

          <Route
            path="/category-form/:categoryId?"
            render={({ match: { params } }) => {
              return uid
              ? <CategoryForm uid={uid} categoryId={params.categoryId} />
              : <Redirect to="/login" />
            }}
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
