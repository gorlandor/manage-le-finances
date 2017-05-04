import React, { Component } from 'react';
import * as firebaseConfig from '../firebase.config';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'amount': 0,
      'due_date': '',
      'is_recurrent': false,
      'expense_title': '',
      'shared_with': '',
      'loading': false
    };
    this._onSubmit = this._onSubmit.bind(this);
  }
  _onSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    firebaseConfig.expensesRef()
      .push({
        'amount': this.state.amount,
        'due_date': this.state.due_date,
        'is_recurrent': this.state.is_recurrent,
        'expense_title': this.state.expense_title,
        'shared_with': this.state.shared_with
      })
      .then(() => {
        this.setState({
          'amount': 0,
          'due_date': '',
          'is_recurrent': false,
          'expense_title': '',
          'shared_with': '',
          'loading': false
        });
      })
      .catch((err) => {
        console.warn({ err });
      })
      .then(() => {
        this.setState({ loading: false });
      });
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
            required />
          <br />
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
            required />
          <br />
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
            required />
          <br />
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
            required />
          <br />
        </label>
        <label className="form-label flex-vertically">
          Recurrent?
          <input
            className="form-control"
            type="checkbox"
            id="is_recurrent"
            name="is_recurrent"
            onChange={(event) => this.setState({ 'is_recurrent': !this.state.is_recurrent })} />
          <br />
        </label>
        {this.state.loading
          ? <button className="btn login-btn" disabled>Submit</button>
          : <button className="btn login-btn">Submit</button>}
      </form>
    );
  }
}

export default TodoForm;