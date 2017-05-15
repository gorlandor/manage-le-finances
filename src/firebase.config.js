import firebase, { app, auth, database } from '../node_modules/firebase';

const config = {
  apiKey: "AIzaSyD8zpRHrTURhNjPrBgj_VoqKEI_v5-E3cE",
  authDomain: "manage-le-finances.firebaseapp.com",
  databaseURL: "https://manage-le-finances.firebaseio.com",
  projectId: "manage-le-finances",
  storageBucket: "manage-le-finances.appspot.com",
  messagingSenderId: "199442396161"
};

firebase.initializeApp(config);
const version = '/v0';
const api = firebase.database().ref(version);

// Database Refs
const expensesRef = (expenseId) => api.child(`expenses/${expenseId}`);
const userRef = (userId) => api.child(`users/${userId}`);
const userExpensesRef = (userId) => api.child(`user-expenses/${userId}`);

// firebase module
export { auth, expensesRef, userRef, userExpensesRef };