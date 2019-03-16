import * as React from "react";
import {
  IExpense,
  ExpenseRecurrence,
  IExpenseWizardProps
} from "../../models/Expense.interface";
import { Link } from "react-router-dom";

export function Step2({
  expenseId = "",
  loading,
  onSubmit,
  notifyChange,
  shared_with
}: IExpenseWizardProps) {
  return (
    <React.Fragment>
      <form
        className="login-form flex-container"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <label className="form-label flex-vertically">
          Share with?
          <input
            className="form-control"
            type="email"
            id="shared_with"
            name="shared_with"
            placeholder="person@email.com"
            onChange={event => notifyChange(event, "text")}            
            value={shared_with}
          />
        </label>
        <div
          className={"flex-vertically"}
          style={{ height: "100px", justifyContent: "space-evenly" }}
        >
          <Link
            to={`/expense-form/1/${expenseId}`}
            className={"btn flex-vertically"}
            style={{ backgroundColor: "ghostwhite", color: "#673ab7" }}
          >
            Back
          </Link>

          {loading === true && (
            <button type="submit" className="btn" disabled>
              Submit
            </button>
          )}

          {loading === false && (
            <button type="submit" className="btn">
              Submit
            </button>
          )}
        </div>
      </form>
    </React.Fragment>
  );
}
