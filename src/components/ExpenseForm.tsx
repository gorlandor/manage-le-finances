import * as React from "react";
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from "react-router-dom";
import * as firebaseConfig from "../firebase.config";
import { ExpenseInitialState, IExpense, IExpenseFormProps } from "../models/Expense.interface";
import { Step1 } from "./expense-form/Step1";
import { Step2 } from "./expense-form/Step2";

class ExpenseForm extends React.Component<IExpenseFormProps> {
  toList: boolean = false;
  state: IExpense = ExpenseInitialState(this.props.email);

  componentDidMount() {
    const { uid, expenseId } = this.props;

    if (expenseId) {
      firebaseConfig.userExpensesRef(uid, expenseId).on("value", snapshot => {
        const {
          amount,
          amount_paid,
          amount_remaining,
          category,
          due_date,
          expense_title,
          recurrence,
          shared_with
        } = snapshot.val();

        const numericAmount = parseFloat(amount);

        this.setState({
          amount: numericAmount,
          amount_paid: parseFloat(amount_paid),
          amount_remaining: parseFloat(amount_remaining),
          category,
          due_date,
          expense_title,
          recurrence,
          shared_with,
          loading: false
        });
      });

      firebaseConfig.categoriesRef().on("value", snapshot => {
        this.setState({
          categories: Object.keys(snapshot.val())
        });
      });
    } else {
      firebaseConfig.categoriesRef().on("value", snapshot => {
        this.setState({
          categories: Object.keys(snapshot.val()),
          loading: false
        });
      });
    }
  }

  _onPaidFull = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { amount } = this.state;
    const { checked } = event.target;

    if (checked) {
      this.setState({
        amount_paid: amount,
        amount_remaining: 0
      });
    } else {
      this.setState({
        amount_paid: 0,
        amount_remaining: amount
      });
    }
  };

  _onAmountDueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState((prevState: IExpense) => {
      return {
        amount_remaining: Number(value) - prevState.amount_paid,
        [name]: Number(value)
      };
    });
  };

  _onAmountPaidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState((prevState: IExpense) => {
      return {
        amount_remaining: prevState.amount - Number(value),
        [name]: Number(value)
      };
    });
  };

  _onChange = (event: React.ChangeEvent<any>, type: "number" | "text") => {
    const { name, value } = event.target;

    if (type === "number") {
      const numericValue = Number(value);
      this.setState({ [name]: numericValue });
    } else {
      this.setState({ [name]: value });
    }
  };

  _onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, uid, expenseId } = this.props;

    const {
      amount,
      amount_paid,
      amount_remaining,
      category,
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
          amount_paid,
          amount_remaining,
          category,
          due_date,
          expense_title,
          recurrence,
          shared_with
        },
        [`/user-expenses/${uid}/${expenseId}`]: {
          amount,
          amount_paid,
          amount_remaining,
          category,
          due_date,
          expense_title,
          recurrence,
          shared_with
        }
      };

      firebaseConfig.api
        .update(updates)
        .then(() => this.setState(ExpenseInitialState(email)))
        .catch((err: Error) => console.warn({ err }));
    } else {
      let transaction = firebaseConfig.expensesRef("").push();

      transaction
        .set({
          amount,
          amount_paid,
          amount_remaining,
          category,
          due_date,
          expense_title,
          recurrence,
          shared_with
        })
        .then(() => this.setState(ExpenseInitialState(email)))
        .catch((err: Error) => console.warn({ err }));

      if (transaction !== undefined) {
        firebaseConfig
          .userExpensesRef(uid, transaction.key || "")
          .set({
            amount,
            amount_paid,
            amount_remaining,
            category,
            due_date,
            expense_title,
            recurrence,
            shared_with
          });
      }
    }

    this.toList = true;
  };
  render() {
    if (this.toList === true) {
      return <Redirect to="/expense-list" />;
    }

    if (this.state.loading === true) {
      return (
        <React.Fragment>
          <h3 className="flex-around">
            <Link
              className={"actionLink"}
              style={{ flex: "2", textAlign: "center" }}
              to="/expense-form/1"
            >
              Expenses
            </Link>
            <Link
              className={"actionLink"}
              style={{ flex: "1", textAlign: "center" }}
              to="/expense-list"
            >
              View list
            </Link>
            <Link
              className={"actionLink"}
              style={{ flex: "1", textAlign: "center" }}
              to="/category-form"
            >
              Add Category
            </Link>
            <Link
              className={"actionLink"}
              style={{ flex: "1", textAlign: "center" }}
              to="/logout"
            >
              Logout
            </Link>
          </h3>
          <div className="login-form flex-container">Loading...</div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <h3 className="flex-around">
          <Link
            className={"actionLink"}
            style={{ flex: "2", textAlign: "center" }}
            to="/expense-form/1"
          >
            Expenses
          </Link>
          <Link
            className={"actionLink"}
            style={{ flex: "1", textAlign: "center" }}
            to="/expense-list"
          >
            View list
          </Link>
          <Link
            className={"actionLink"}
            style={{ flex: "1", textAlign: "center" }}
            to="/category-form"
          >
            Add Category
          </Link>
          <Link
            className={"actionLink"}
            style={{ flex: "1", textAlign: "center" }}
            to="/logout"
          >
            Logout
          </Link>
        </h3>
        <Router>
          <Switch>
            <Route
              path={"/expense-form/1/:expenseId?"}
              render={({ history }) => (
                <Step1
                  history={history}
                  notifyChange={this._onChange}
                  notifyPayoff={this._onPaidFull}
                  onAmountDueChange={this._onAmountDueChange}
                  onAmountPaidChange={this._onAmountPaidChange}
                  {...this.state}
                  {...this.props}
                />
              )}
            />
            <Route
              path={"/expense-form/2/:expenseId?"}
              render={() => (
                <Step2
                  history={history}
                  notifyChange={this._onChange}
                  onSubmit={this._onSubmit}
                  {...this.state}
                  {...this.props}
                />
              )}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default ExpenseForm;
