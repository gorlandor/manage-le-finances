import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import List from './components/List';
import ExpenseForm from './components/ExpenseForm';

const AppShell = () => (
	<Router>
		<div>
		<Route exact path="/" component={App} />
		<Route path="/login" component={Login} />
		<Route path="/register" component={Register} />
		<Route path="/expense-list" component={List} />
		<Route path="/expense-form" component={ExpenseForm} />
		</div>
	</Router>
);
render(<AppShell />, document.getElementById('app'));