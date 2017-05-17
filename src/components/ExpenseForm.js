import React, { Component } from 'react';
import * as firebaseConfig from '../firebase.config';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.initialState);
    this._onSubmit = this._onSubmit.bind(this);
  }
  get initialState() {
    return {
      'amount': 0,
      'due_date': '',
      'expense_title': '',
      'recurrence': 'once',
      'shared_with': 'myself',
      'loading': false
    }
  }
  _onSubmit(event) {
    event.preventDefault();

    let { amount, due_date, expense_title, recurrence, shared_with } = this.state;

    this.setState({ loading: true });

    let transaction = firebaseConfig.expensesRef('').push();
    transaction.set({ amount, due_date, expense_title, recurrence, shared_with })
      .then(() => this.setState(this.initialState))
      .catch((err) => console.warn({ err }));

    if (transaction !== undefined) {
      let { uid } = JSON.parse(localStorage.getItem("authState"));
      firebaseConfig.userExpensesRef(uid, transaction.key)
        .set({ amount, due_date, expense_title, recurrence, shared_with });
    }

  }
  render() {
    return (
      <form className="login-form flex-container" autoComplete="off" onSubmit={this._onSubmit}>
        <label className="form-label flex-vertically">
          Title
          <input
            className="form-control"
            type="text"
            id="expense_title"
            name="expense_title"
            placeholder="Expense Title"
            onChange={(event) => this.setState({ 'expense_title': event.target.value })}
            required
            value={this.state.expense_title} />
        </label>
        <label className="form-label flex-vertically">
          Amount
          <input
            className="form-control"
            type="number"
            step="0.01"
            id="amount"
            name="amount"
            placeholder="Amount"
            onChange={(event) => this.setState({ 'amount': event.target.value })}
            required
            value={this.state.amount} />
        </label>
        <label className="form-label flex-vertically">
          Due Date
          <input
            className="form-control"
            type="date"
            id="due_date"
            name="due_date"
            placeholder="Due Date"
            onChange={(event) => this.setState({ 'due_date': event.target.value })}
            required
            value={this.state.due_date} />
        </label>
        <label className="form-label flex-vertically">
          Shared with?
          <input
            className="form-control"
            type="text"
            id="shared_with"
            name="shared_with"
            placeholder="Shared with..."
            onChange={(event) => this.setState({ 'shared_with': event.target.value })}
            required
            value={this.state.shared_with} />
        </label>
        <label className="form-label flex-vertically">
          Recurrence
          <select
            className="form-control"
            name="recurrence"
            id="recurrence"
            onChange={(event) => this.setState({ 'recurrence': event.target.value })}
            value={this.state.recurrence}>
            <option value="once" selected>once</option>
            <option value="daily">daily</option>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            <option value="yearly">yearly</option>
          </select>
        </label>
        {this.state.loading
          ? <button className="btn login-btn" disabled>Submit</button>
          : <button className="btn login-btn">Submit</button>}
      </form>
    );
  }
}

export default ExpenseForm;