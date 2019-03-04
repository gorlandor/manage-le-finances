import * as React from "react";
import { Link, Redirect } from "react-router-dom";
import * as firebaseConfig from "../firebase.config";
import { ExpenseRecurrence, IExpense } from "../models/Expense.interface";

class ExpenseForm extends React.Component<{
  uid: string;
  expenseId: string | null;
}> {
  toList: boolean = false;
  state: IExpense;
  baseState: IExpense;

  constructor(props: any) {
    super(props);
    this.state = {
      amount: 0,
      due_date: "",
      expense_title: "",
      recurrence: ExpenseRecurrence.Once,
      shared_with: "myself",
      loading: false
    };
    this.baseState = this.state;
  }

  componentDidMount() {
    const { uid, expenseId } = this.props;

    if (expenseId) {
      firebaseConfig.userExpensesRef(uid, expenseId).on("value", snapshot => {
        const {
          amount,
          due_date,
          expense_title,
          recurrence,
          shared_with
        } = snapshot.val();

        const numericAmount = parseFloat(amount);

        this.setState({
          amount: numericAmount,
          due_date,
          expense_title,
          recurrence,
          shared_with
        });
      });
    }
  }

  _onChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  _onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { uid, expenseId } = this.props;

    const {
      amount,
      due_date,
      expense_title,
      recurrence,
      shared_with
    } = this.state;

    this.setState({ loading: true });

    if (expenseId) {
      const updates = {
        [`/expenses/${expenseId}`]: {
          amount,
          due_date,
          expense_title,
          recurrence,
          shared_with
        },
        [`/user-expenses/${uid}/${expenseId}`]: {
          amount,
          due_date,
          expense_title,
          recurrence,
          shared_with
        }
      };

      firebaseConfig.api
        .update(updates)
        .then(() => this.setState(this.baseState))
        .catch((err: Error) => console.warn({ err }));
    } else {
      let transaction = firebaseConfig.expensesRef("").push();

      transaction
        .set({ amount, due_date, expense_title, recurrence, shared_with })
        .then(() => this.setState(this.baseState))
        .catch((err: Error) => console.warn({ err }));

      if (transaction !== undefined) {
        firebaseConfig
          .userExpensesRef(uid, transaction.key || "")
          .set({ amount, due_date, expense_title, recurrence, shared_with });
      }
    }

    this.toList = true;
  };
  render() {
    if (this.toList === true) {
      return <Redirect to="/expense-list" />;
    }

    return (
      <React.Fragment>
        <h3 className="flex-around">
          Expenses
          <Link to="/expense-list">View list</Link>
          <Link to="/logout">Logout</Link>
        </h3>
        <form
          className="login-form flex-container"
          autoComplete="off"
          onSubmit={this._onSubmit}
        >
          <label className="form-label flex-vertically">
            Title
            <input
              className="form-control"
              type="text"
              id="expense_title"
              name="expense_title"
              placeholder="Expense Title"
              onChange={this._onChange}
              required
              value={this.state.expense_title}
            />
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
              onChange={event => {
                let amount: number = Number(event.target.value);
                this.setState({ amount });
              }}
              required
              value={this.state.amount}
            />
          </label>
          <label className="form-label flex-vertically">
            Due Date
            <input
              className="form-control"
              type="date"
              id="due_date"
              name="due_date"
              placeholder="Due Date"
              onChange={this._onChange}
              required
              value={this.state.due_date}
            />
          </label>
          <label className="form-label flex-vertically">
            Shared with?
            <input
              className="form-control"
              type="text"
              id="shared_with"
              name="shared_with"
              placeholder="Shared with..."
              onChange={this._onChange}
              required
              value={this.state.shared_with}
            />
          </label>
          <label className="form-label flex-vertically">
            Recurrence
            <select
              className="form-control"
              name="recurrence"
              id="recurrence"
              onChange={this._onChange}
              value={this.state.recurrence}
            >
              <option value="once" selected>
                once
              </option>
              <option value="daily">daily</option>
              <option value="weekly">weekly</option>
              <option value="monthly">monthly</option>
              <option value="quarterly">quarterly</option>
              <option value="semiannually">semiannually</option>
              <option value="annually">annually</option>
            </select>
          </label>
          {this.state.loading ? (
            <button className="btn login-btn" disabled>
              Submit
            </button>
          ) : (
            <button className="btn login-btn">Submit</button>
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default ExpenseForm;
