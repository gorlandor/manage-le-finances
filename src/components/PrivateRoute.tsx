import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as firebaseConfig from '../firebase.config';

const PrivateRoute = ({ component: Component, path: Path }:
  { component: any, path: string }) => {

  return firebaseConfig.auth().currentUser === null
    ? <Redirect to="/login" />
    : <Route path={Path} component={Component} />

};

export default PrivateRoute;