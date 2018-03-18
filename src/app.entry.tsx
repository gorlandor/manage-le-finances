import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import List from './components/List';
import ExpenseForm from './components/ExpenseForm';
import PrivateRoute from './components/PrivateRoute';

const AppShell = () => (
  <Router>
    <div className="full-width">
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/expense-list" component={List} />
      <PrivateRoute path="/expense-form" component={ExpenseForm} />
      <PrivateRoute path="/logout" component={Logout} />
    </div>
  </Router>
);
render(<AppShell />, document.getElementById('app'));