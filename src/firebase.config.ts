import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "",
  authDomain: "manage-le-finances.firebaseapp.com",
  databaseURL: "https://manage-le-finances.firebaseio.com",
  projectId: "manage-le-finances",
  storageBucket: "manage-le-finances.appspot.com",
  messagingSenderId: ""
};

firebase.initializeApp(config);
const version = '/v0';
const api = firebase.database().ref(version);

// Database Refs
export const expensesRef = (expenseId: string = "") => {
  return api.child(`expenses/${expenseId}`);
};
export const userRef = (userId: string = "") => {
  return api.child(`users/${userId}`);
};
export const userExpensesRef = (userId: string, expenseId: string = "") => {
  return api.child(`user-expenses/${userId}/${expenseId}`);
};

// firebase module
export let auth = firebase.auth;