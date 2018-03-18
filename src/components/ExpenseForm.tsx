import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as firebaseConfig from '../firebase.config';
import { ExpenseRecurrence, IExpense } from '../models/Expense.interface';

class ExpenseForm extends React.Component {

  toList: boolean = false;
  state: IExpense;
  baseState: IExpense;

  constructor(props: Object) {
    super(props);
    this.state = {
      'amount': 0,
      'due_date': '',
      'expense_title': '',
      'recurrence': ExpenseRecurrence.Once,
      'shared_with': 'myself',
      'loading': false
    };
    this.baseState = this.state;    
  }
  _onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let { amount, due_date, expense_title, recurrence, shared_with } = this.state;

    this.setState({ loading: true });

    let transaction = firebaseConfig.expensesRef('').push();
    transaction.set({ amount, due_date, expense_title, recurrence, shared_with })
      .then(() => this.setState(this.baseState))
      .catch((err: Error) => console.warn({ err }));

    if (transaction !== undefined) {
      let { uid } = JSON.parse(window.localStorage.getItem("authState") || `${{
        'email': '',
        'password': '',
        'signedIn': false
      }}`);
      firebaseConfig.userExpensesRef(uid, transaction.key || "")
        .set({ amount, due_date, expense_title, recurrence, shared_with });
    }

    this.toList = true;
  }
  render() {

    if (this.toList === true) {
      return <Redirect to='/expense-list' />
    }

    return (
      <React.Fragment>
        <h3 className="flex-around">
        Expenses 
        <Link to="/expense-list">View list</Link>
        <Link to="/logout">Logout</Link>
      </h3>
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
            onChange={(event) => {
              let amount: number = Number(event.target.value);
              this.setState({ amount });
            }}
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
            <option value="quarterly">quarterly</option>
            <option value="semiannually">semiannually</option>
            <option value="annually">annually</option>
          </select>
        </label>
        {this.state.loading
          ? <button className="btn login-btn" disabled>Submit</button>
          : <button className="btn login-btn">Submit</button>}
      </form>
      </React.Fragment>
    );
  }
}

export default ExpenseForm;